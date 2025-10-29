import React from 'react';
import {Outlet} from "react-router";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            AdminLayout
            MobileSidebar
            <aside className="w-full max-w-[270px] hidden lg:block">
                Sidebar
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