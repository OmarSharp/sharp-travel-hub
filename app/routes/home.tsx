import { useEffect } from "react";
import { account } from "~/appwrite/client";



const Home = () => {

    // useEffect(() => {
    //     // Remove leftover OAuth params if they exist
    //     const url = new URL(window.location.href);
    //     if (url.searchParams.get("secret") || url.searchParams.get("userId")) {
    //         window.history.replaceState({}, document.title, "/");
    //     }
    //
    //     // Optionally check if user is already signed in
    //     account.get()
    //         .then(user => {
    //             console.log("User already logged in:", user);
    //             window.location.href = "/"; // redirect to dashboard
    //         })
    //         .catch(() => console.log("User not logged in yet."));
    // }, []);
    // useEffect(() => {
    //     account.get()
    //         .then(user => console.log("✅ Logged in as:", user))
    //         .catch(err => console.log("ℹ️ Not logged in:", err.message));
    // }, []);
  return (


     <div>Hello Appwrite 👋</div>
  )
}

export default Home