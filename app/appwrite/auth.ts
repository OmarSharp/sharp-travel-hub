import { ID, OAuthProvider, Query } from "appwrite";
import { account, database, appwriteConfig } from "~/appwrite/client";
import { redirect } from "react-router";

// ✅ Get user document from collection
export const getExistingUser = async (id: string) => {
    try {
        const response = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", id)]
        );
        return response.total > 0 ? response.documents[0] : null;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

// ✅ Store logged-in user's info
export const storeUserData = async () => {
    try {
        const user = await account.get();
        if (!user) throw new Error("User not found");

        // ✅ getSessionCurrent replaces getSession("current")
        const session = await account.getSession('current');
        const { providerAccessToken } = session || {};

        const profilePicture = providerAccessToken
            ? await getGooglePicture(providerAccessToken)
            : null;

        const createdUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: user.$id,
                email: user.email,
                name: user.name,
                imageUrl: profilePicture,
                joinedAt: new Date().toISOString(),
            }
        );

        if (!createdUser.$id) redirect("/sign-in");
    } catch (error) {
        console.error("Error storing user data:", error);
    }
};

// ✅ Get Google profile picture
const getGooglePicture = async (accessToken: string) => {
    try {
        const response = await fetch(
            "https://people.googleapis.com/v1/people/me?personFields=photos",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (!response.ok) throw new Error("Failed to fetch Google profile picture");

        const { photos } = await response.json();
        return photos?.[0]?.url || null;
    } catch (error) {
        console.error("Error fetching Google picture:", error);
        return null;
    }
};




// export const loginWithGoogle = async () => {
//     try {
//         const tokenResponse = account.createOAuth2Token(OAuthProvider.Google);
//
//         // tokenResponse contains `accessToken` and `refreshToken`
//         console.log("OAuth tokens:", tokenResponse);
//
//         // optionally store tokens in your app state / localStorage
//         // then use them for API calls via your backend or Appwrite functions
//     } catch (err) {
//         console.error("Google OAuth error:", err);
//     }
// };


// ✅ Login with Google OAuth
export const loginWithGoogle = async () => {
    try {
        // Still valid in browser (redirect-based OAuth flow)
        account.createOAuth2Session(
            OAuthProvider.Google,
            `${window.location.origin}/`,
            `${window.location.origin}/404`
        );
    } catch (error) {
        console.error("Error during OAuth2 session creation:", error);
    }
};

// export const loginWithGoogle = async () => {
//     try {
//         await account.createOAuth2Token({
//             provider: OAuthProvider.Google,
//             success: `${window.location.origin}/`,
//             failure: `${window.location.origin}/sign-in`,
//         });
//     } catch (error) {
//         console.error("OAuth2 login failed:", error);
//     }
// };

// ✅ Logout current session
export const logoutUser = async () => {
    try {
        await account.deleteSession('current'); // replaces deleteSession("current")
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

// ✅ Fetch logged-in user data
export const getUser = async () => {
    try {
        const user = await account.get();
        if (!user) return redirect("/sign-in");

        const response = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal("accountId", user.$id),
                Query.select(["name", "email", "imageUrl", "joinedAt", "accountId"]),
            ]
        );

        return response.documents.length > 0
            ? response.documents[0]
            : redirect("/sign-in");
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

// ✅ Fetch all users
export const getAllUsers = async (limit: number, offset: number) => {
    try {
        const response = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.limit(limit), Query.offset(offset)]
        );

        if (response.total === 0) return { users: [], total: 0 };

        return { users: response.documents, total: response.total };
    } catch (error) {
        console.error("Error fetching users:", error);
        return { users: [], total: 0 };
    }
};
