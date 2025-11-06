import React from 'react';
import {Link, NavLink, useLoaderData, useNavigate} from "react-router";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {sidebarItems} from "~/constants";
import {cn} from "~/lib/utils";
import {logoutUser} from "~/appwrite/auth";


const NavItems = ({handleClick} : {handleClick?: ()=> void}) => {

    // const user = {
    //     name: 'Omar Almasri',
    //     email: 'sharparray1994@gmail.com',
    //     imageUrl: '/assets/images/david.webp'
    // }

    const user = useLoaderData();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/sign-in')
    }


    return (
        <section className="nav-items fixed">
                 <Link to='/' className="link-logo">
                     <img src="/assets/icons/logo.svg" alt="logo" className="size-[50px]"/>
                     <h1>Sharp Travel
                          <span className="text-center justify-center">Hub</span></h1>
                 </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({id, href, icon, label}) =>
                        <NavLink to={href} key={id}>
                            {({isActive}: {isActive: boolean}) => (
                                <div className={cn('group nav-item'
                                    ,{'bg-[#2C73D2] !text-white' : isActive})} onClick={handleClick}>
                                    <img src={icon} alt={label} className={cn(`group-hover: brightness-0 size-3 group-hover:invert 
                                    ${isActive ? 'brightness-0 invert' : ' !text-yellow-500'}`)}/>
                                    {label}
                                </div>
                                )}
                        </NavLink>

                    )}
                </nav>
                <footer className="nav-footer">
                    <img src={user.imageUrl || 'assets/images/david.webp'} alt={user.name || 'OmarSharp'} referrerPolicy="no-referrer"/>
                    <article>
                        <h2>{user.name}</h2>
                        <p className="text-orange-700">{user.email}</p>
                    </article>

                    <button onClick={()=>{
                        console.log('logout');
                    }}>
                        <img src="/assets/icons/logout.svg" alt="logout" className="size-7 cursor-pointer"
                        onClick={handleLogout}/>

                    </button>
                </footer>
            </div>



        </section>
    );
};

export default NavItems;