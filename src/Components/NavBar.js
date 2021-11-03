import React from 'react'

function NavBar() {
    return (
        <nav class = "flex items-center justify-between flex-wrap bg-blue-200 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class='font-bold text-xl'>
                    Kenny's Website
                </span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    About
                </div>
            </div>
        </nav>
    )
}

export default NavBar
