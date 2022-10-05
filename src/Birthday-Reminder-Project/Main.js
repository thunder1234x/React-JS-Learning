import React from 'react'

import peopleData from './data/people';
import bellIcon from  './pictures/bellIcon.png';

const BirthdayEntry = ({ name, age, image }) => {
    return (
        <div className='flex'>
            <div className='w-[70px] h-[70px] rounded-full mx-5 my-4'>
                <img className="w-[70px] h-[70px] rounded-full" src={image} alt="user" />
            </div>
            <div className='w-1/3 flex flex-col justify-center items-start'>
                <h3 className='font-bold text-md font-serif'>{name}</h3>
                <p className='text-green-700'>{age} Years</p>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
                <button>
                <img className='w-5 mr-10' src={bellIcon} alt="bell-icon" />
                </button>
                
            </div>
        </div>
    )

}

const Main = () => {
    const [people, setPeople] = React.useState(peopleData);
    return (
        <div className='bg-pink-400 flex justify-center items-center'>

            <div className='bg-white w-[90%] md:w-[40%] lg:w-[35%] mx-auto p-2 my-16  rounded-md'>
                <h1 className='p-2 text-2xl tracking-wide font-bold'>{people.length} birthdays Today</h1>
                {people.map(person => {
                    return <BirthdayEntry key={person.id} {...person} />
                })}
                <div className='w-[90%] mx-auto'>
                    <button className='bg-pink-400 w-[90%] p-2 my-10 ml-4 font-bold tracking-wider rounded-md' onClick={()=>setPeople([])}>Clear All</button>
                </div>
            </div>

        </div>
    )
}

export default Main