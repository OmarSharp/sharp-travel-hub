import React from 'react';
import {Outlet, redirect} from "react-router";
import NavItems from "../../../components/NavItems";
import {Menu, MenuItem, Sidebar, sidebarClasses, SubMenu} from "react-pro-sidebar";
import MobileSidebar from "../../../components/MobileSidebar";
import {account} from "~/appwrite/client";
import {getExistingUser, storeUserData} from "~/appwrite/auth";

export async function clientLoader(){
    try {
        const user = await account.get();

        if (!user.$id) return redirect('/sign-in');

        const exitingUser = await getExistingUser(user.$id);
        if (exitingUser?.status === 'user'){
            return redirect('/');
        }
        return exitingUser?.$id ? exitingUser : await storeUserData();

    }catch (e) {
        console.log('Error clientLoader', e);
        return redirect('/sign-in');
    }
}

const AdminLayout = () => {
    return (
        <div className="admin-layout h-full ">
            <MobileSidebar />

            <aside className="w-full max-w-[270px] h-auto hidden bg-[#FFB800] lg:block">
                <Sidebar>
                    <Menu>
                        <NavItems />

                    </Menu>
                </Sidebar>

            </aside>
            <aside>
                <aside className="children">
                    <Outlet />

                </aside>
            </aside>
        </div>
    );
};

export default AdminLayout;