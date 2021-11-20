import React from 'react'
import rapoolThumb from '../Assets/RapoolThumb.png'
import travelHavenThumb from '../Assets/TravelHavenThumb.png'
import beatMatchThumb from '../Assets/BeatMatchThumb.png'
function Projects() {
    return (
        <div class='border flex-row divide-y-2 divide-gray-500'>
            <div class='flex p-3 shadow-sm items-center justify-center'>
                <img class='flex-grow-0 p-10 opacity-90 object-contain h-96' src= {beatMatchThumb}/>
                <div class='flex-row p-10 mx-10 flex-grow border'>
                    <h2 class='flex text-2xl'>Beat Match</h2>
                    <h3 class='flex text-xl'>Project deets</h3>
                </div>
            </div>
            <div class='flex p-3 shadow-sm items-center justify-center'>
                <img class='flex-grow-0 p-10 opacity-90 object-contain h-96' src= {rapoolThumb}/>
                <div class='flex-row p-10 mx-10 flex-grow border'>
                    <h2 class='flex text-2xl'>Rapool</h2>
                    <h3 class='flex text-xl'>Project deets</h3>
                </div>
            </div>
            <div class='flex p-3 shadow-sm items-center justify-center'>
                <img class='flex-grow-0 p-10 opacity-90 object-contain h-96' src= {travelHavenThumb}/>
                <div class='flex-row p-10 mx-10 flex-grow border'>
                    <h2 class='flex text-2xl'>Travel Haven</h2>
                    <h3 class='flex text-xl'>Project deets</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects
