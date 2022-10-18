import React from 'react'
import SingleCocktail from '../components/SingleCocktail';
import { useGlobalContextHook } from '../context'
import Loading from './Loading';



const CocktailList = () => {
    const { cocktails , isLoading } = useGlobalContextHook();
    if (isLoading) {
        return <Loading />
    }

    if (cocktails == null || cocktails.length < 1) {
        return <div className='text-xl tracking-wider lg:text-3xl lg:tracking-widest text-center
        font-bold'>No Cocktails Matched Your Search Criteria</div>
    }
    return (
        <div className='w-[100vw]'>
            <div className='text-center font-bold text-4xl tracking-widest'>
                Cocktails</div>
            <div className='w-[80%] mx-auto md:w-[100%] md:flex justify-evenly
             flex-wrap'>
                {cocktails.map(item => {
                    return <SingleCocktail key={item.idDrink} {...item} />
                })}
            </div>
        </div>
    )
}

export default CocktailList