import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContextHook } from '../context';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const ComponentView = () => {

  const { singleCocktail } = useGlobalContextHook();
  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = singleCocktail;
  const ingArr = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4
  ]
  return (
    <div className='my-20 md:w-[90%] mx-auto'>
      <div className='w-fit mx-auto'>
        <Link to='/' className='bg-green-500 px-4 py-1 rounded-md
        font-bold tracking-wider text-lg text-white'>Back Home</Link>
      </div>
      <h2 className='text-4xl font-bold tracking-widest mt-4 mb-14
      text-center'>{singleCocktail.strDrink}</h2>
      <div className='lg:flex justify-center items-center'>
        <div className='w-[85%]   mx-auto mb-8'><img src={singleCocktail.strDrinkThumb} alt='cocktail'
          className='object-cover rounded-lg' /></div>
        <div className='flex flex-col px-9 w-[100%]'>
          <div className='flex items-center my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Name :</p>
            <p className='font-semibold tracking-wide'>{singleCocktail.strDrink}</p>
          </div>
          <div className='flex items-center my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Category :</p>
            <p className='font-semibold tracking-wide'>{singleCocktail.strCategory}</p>
          </div>
          <div className='flex items-center my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Info :</p>
            <p className='font-semibold tracking-wide'>{singleCocktail.strAlcoholic}</p>
          </div>
          <div className='flex items-center my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Glass :</p>
            <p className='font-semibold tracking-wide'>{singleCocktail.strGlass}</p>
          </div>
          <div className='flex my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Instructions:</p>
            <p className='font-semibold tracking-wide'>{singleCocktail.strInstructions}</p>
          </div>
          <div className='flex items-center my-2'>
            <p className='mr-3 w-fit bg-lime-200 h-fit p-1
          text-center text-green-800 font-bold rounded-md'>Ingredients :</p>
            <p className='font-semibold tracking-wide'>{ingArr.map((item, index) => {
              return item && <span key={index} className='mr-3'>{item}</span>
            }
            )}</p>
          </div>
        </div>
      </div>

    </div>
  )
}


const SingleCocktailInfo = () => {

  const { id } = useParams();

  const { setSingleCocktail, isLoading, setLoading } = useGlobalContextHook();


  useEffect(() => {
     async function getCOcktail() {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const respJson = await response.json();
        // console.log(respJson);
        setSingleCocktail(...respJson.drinks);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
   getCOcktail();
  }, [id])

  return (<div>{isLoading ? <Loading /> : <ComponentView />}</div>)

}

export default SingleCocktailInfo