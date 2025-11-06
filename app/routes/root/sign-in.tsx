import {Link, redirect} from "react-router";
import {loginWithGoogle} from "~/appwrite/auth";
import {account} from "~/appwrite/client";



export async function clientLoader(){
    try {
        const user = await account.get();
        console.log("Logged in user:", user);


        if (user.$id) return redirect('/');
    }catch (e) {
        console.log('Error fetching user', e);
    }
}

const SignIn = () => {




    return (
        <main className="auth">
            <section className="size-full glassmorphism flex-center px-7">
                <div className="sign-in-card">
                    <header className="header">
                        <Link to='/'>
                            <img src="/assets/icons/logo.svg" alt="logo" className="size[100px]"/>
                        </Link>

                        <h1 className="p-30-bold">SHARP TRAVEL HUB</h1>
                    </header>

                    <article>
                        <h2 className="p-24-semibold text-center" >Begin Travel Journey With US!</h2>
                        <p className="p-16-semibold text-center text-blue-600 leading-1">
                            Sign In with Google Account To Start Manage Trips and Users
                        </p>
                    </article>
                    
                    <button className="h-13 w-full bg-blue-900"
                    onClick={loginWithGoogle}>
                        <img src="/assets/icons/google.svg" alt="signin" className="size-5"/>
                        <span className="p-18-semibold text-yellow-500">Sign In</span>
                    </button>

                </div>

            </section>
        </main>
    );
};

export default SignIn;