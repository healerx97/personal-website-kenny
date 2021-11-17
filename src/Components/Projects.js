import React from 'react'

function Projects() {
    return (
        <div class='border flex-row divide-y-2 divide-gray-500'>
            <div class='flex p-3 shadow-sm items-center justify-center'>
                <img class='flex-grow-0 p-10 opacity-90' src= 'https://picsum.photos/300/300'/>
                <div class='flex-row p-10 mx-10 flex-grow border'>
                    <h2 class='flex text-2xl'>Project Name</h2>
                    <h3 class='flex text-xl'>Project deets</h3>
                </div>
            </div>
            <div class='flex p-3 shadow-sm items-center justify-center'>
                <img class='flex-grow-0 p-10 opacity-90' src= 'https://picsum.photos/300/300'/>
                <div class='flex-row p-10 mx-10 flex-grow border'>
                    <h2 class='flex text-2xl'>Project Name</h2>
                    <h3 class='flex text-xl'>Project deets</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects
