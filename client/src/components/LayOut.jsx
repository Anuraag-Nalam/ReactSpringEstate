import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex">
            <div className="w-60 text-white">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <div className="">
                    <NavBar />
                </div>

                {/* Dynamic Content */}
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
