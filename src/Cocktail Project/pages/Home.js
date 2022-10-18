import React from 'react'

import CocktailList from '../components/CocktailList'
import CocktailSearch from '../components/CocktailSearch'

const Home = () => {
  return (
    <div>
        <CocktailSearch />
        <CocktailList />
    </div>
  )
}

export default Home