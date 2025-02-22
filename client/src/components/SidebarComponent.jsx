import React from 'react'

const SidebarComponent = ({ SidebarLabel, icon }) => {
    return (
        <p className='hover:cursor-pointer hover:text-blue-700 flex gap-1 items-center mt-0'>{SidebarLabel}<span className='pl-0.5 pt-0.5'>{icon && icon}</span></p>
    )
}

export default SidebarComponent
