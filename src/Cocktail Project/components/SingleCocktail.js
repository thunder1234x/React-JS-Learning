import React from 'react'
import { Link } from 'react-router-dom'

const SingleCocktail = ({ idDrink, strDrink, strAlcoholic, strGlass,
    strDrinkThumb }) => {
    return (
        <div className='my-16 md:my-8 bg-white rounded-md shadow-md shadow-black
        hover:shadow-lg hover:shadow-black duration-100'>
            <img className='h-[350px] w-[100%] object-cover' src={strDrinkThumb}
                alt='cocktail' />
            <div className='p-6'>
                <h2 className='text-3xl font-bold tracking-widest mb-3'>
                    {strDrink}</h2>
                <p className='text-xl font-semibold tracking-widest mb-1'>{strGlass}</p>
                <p className='text-md text-gray-400 mb-4'>{strAlcoholic}</p>
                <Link className='bg-green-500 px-4 py-2 rounded-md
                font-bold tracking-widest text-white' to={`/cocktails/${idDrink}`}>
                    Details</Link>
            </div>
        </div>
    )
}

export default SingleCocktail