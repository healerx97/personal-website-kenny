import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
function NavBar() {
    const history = useHistory()
    const [toggle, setToggle] = useState(false)
    let menuBar = (
        <div class='absolute top-14'>
            <div class='p-2 mb-1 shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
            <div class='p-2 mb-1 shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class='p-2 mb-1 shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <div class='p-2 mb-1 shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            </div>
        </div>
    )
    return (
        <div>
            <nav class = "hidden lg:flex items-center justify-between lg:justify-start flex-wrap px-6 py-3 transition duration-200 ease-in-out shadow-md">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <span class='font-bold text-xl cursor-pointer hover:animate-pulse' onClick={()=>history.push('/')}>
                        Kenny Yoon
                    </span>
                </div>
                <div class="w-full block lg:flex gap-3 lg:items-center lg:w-auto">
                    <div class="text-sm flex-grow lg:flex rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/about')}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p>About</p>
                    </div>
                    <div class="text-sm flex-grow lg:flex lg:flex-1 rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/projects')}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        <p>Projects</p>
                    </div>
                    <div class="text-sm flex-grow lg:flex lg:flex-1 rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/contact')}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        <p>Contact</p>
                    </div>
                </div>
            </nav>
            <div class='lg:hidden flex justify-between items-center mr-3 shadow-sm'>
                <a href="#" class='block p-4 font-bold hover:animate-pulse'> Kenny Yoon </a>
                <div class='flex-col flex items-center'>
                    <button onClick = {()=> setToggle(!toggle)} class= "p-2 hover:bg-gray-300 shadow-sm border-b-2 border-black transition duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                    {toggle?menuBar:null}
                </div>
            </div>
        </div>
    )
}

export default NavBar
