import React from 'react';
import {Outlet} from "react-router";
import NavItems from "../../../components/NavItems";
import {Menu, MenuItem, Sidebar, sidebarClasses, SubMenu} from "react-pro-sidebar";
import MobileSidebar from "../../../components/MobileSidebar";

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