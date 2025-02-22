import React from 'react'
import { FaWarehouse } from "react-icons/fa";
import SidebarComponent from '../components/SidebarComponent';
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="offcanvas offcanvas-start !w-60 show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header flex items-center gap-2 text-white bg-blue-950">
                <h5 className="offcanvas-title" id="offcanvasLabel">Mern Estate</h5>
                <FaWarehouse />
            </div>
            <div className="offcanvas-body">
                <SidebarComponent SidebarLabel={'Buy'} />
                <SidebarComponent SidebarLabel={'Rent'} />
                <SidebarComponent SidebarLabel={'Sell'} />
                <SidebarComponent SidebarLabel={'About Mern Estate'} />
                <SidebarComponent SidebarLabel={'Profile Page'} />
                <SidebarComponent SidebarLabel={'Sign Out'} icon={<FaSignOutAlt />} />
            </div>
        </div>

    )
}

export default Sidebar
3