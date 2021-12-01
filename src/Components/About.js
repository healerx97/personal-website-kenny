import React from 'react'

function About() {
    return (
        <div class='p-3 border container mx-auto mt-3'>
            <div class='grid grid-cols-10 gap-8 text-left py-3'>
                <div class='col-span-1 text-center text-3xl'>
                    2017
                </div>
                <div class='col-span-3 text-xl'>
                    Korea Defense Intelligence Command
                </div>
                <ul class='col-span-5 list-disc text-lg'>
                   <li>Spearheaded ranger training, cold-weather training, monthly CBR trainings and fire drills with 91 soldiers as the senior squad leader</li>
                   <li>Automated a monthly schedule creator and a weekly guard duty assigner using Excel VBA to improve efficiency and reliability</li>
                </ul>
                <div class='col-span-1 text-lg'>
                    Gyeonggi, South Korea
                </div>
            </div>
        </div>
    )
}

export default About