// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router"; // use react-router-dom
import {Sidebar, Menu, sidebarClasses} from "react-pro-sidebar";
import NavItems from "./NavItems";

const MobileSidebar = () => {
    const [toggled, setToggled] = useState(false); // false = hidden

    const toggle = () => setToggled(prev => !prev);

    return (
        <div className="mobile-sidebar wrapper">
            <header className="flex items-center justify-between p-2">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/assets/icons/logo.svg" alt="logo" className="size-[25px]" />
                    <h4>Sharp Travel Hub</h4>
                </Link>

                {/* toggle properly: call the function */}
                <button onClick={toggle} aria-label="Toggle menu">
                    <img src="/assets/icons/menu.svg" alt="menu" className="size-7 cursor-pointer" />
                </button>
            </header>

            <Sidebar
                toggled={toggled}                 // <-- control visibility for mobile overlay
                breakPoint="xl"                   // trigger responsive behavior at md (choose as needed)
                onBackdropClick={() => setToggled(false)} // close when backdrop clicked
                width="270px"
            >
                <Menu>
                    {/* pass a handler so NavItems can close the sidebar on item click */}
                    <NavItems handleClick={() => setToggled(false)} />
                </Menu>
            </Sidebar>
        </div>
    );
};

export default MobileSidebar;
