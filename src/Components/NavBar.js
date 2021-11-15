import React from 'react'
import {Link, useHistory} from 'react-router-dom'
function NavBar() {
    const history = useHistory()

    return (
        <nav class = "flex items-center justify-between lg:justify-start flex-wrap bg-blue-50 p-6">
            <div class="flex items-center flex-shrink-0 mr-6">
                <span class='font-bold text-xl cursor-pointer hover:animate-pulse' onClick={()=>history.push('/')}>
                    Kenny Yoon
                </span>
            </div>
            <div class="w-full block lg:flex gap-3 lg:items-center lg:w-auto">
                <div class="text-sm flex-grow lg:flex bg-blue-100 rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/about')}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p>About</p>
                </div>
                <div class="text-sm flex-grow lg:flex lg:flex-1 bg-blue-100 rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/projects')}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    <p>Projects</p>
                </div>
                <div class="text-sm flex-grow lg:flex lg:flex-1 bg-blue-100 rounded-md p-3 items-center cursor-pointer hover:animate-pulse" onClick={()=>history.push('/contact')}>
                    <img class='w-6 h-6' src="https://img.icons8.com/ios/50/000000/email-sign.png"/>
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
