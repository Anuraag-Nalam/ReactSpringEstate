import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
// import { FaArrowDownLong } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light h-[62px]">
                <div className='flex justify-between w-full'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <Dropdown className='mr-2'>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <CgProfile size={38} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">About Mern Estate</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </>
    )
}

export default NavBar
