import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchRestaurant, setSearchRestaurant] = useState('a');
  const [searchState, setSearchState] = useState('');
  const [searchLGA,setSearchLGA] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const fetchDrinks = async () =>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchRestaurant}`)
      const data = await response.json();
      const {drinks} = data;
      if (drinks){
        const newRestaurants = drinks.map(({idDrink,strDrink,strDrinkThumb, strAlcoholic, strGlass}) => 
       { return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        }
      })
      setRestaurants(newRestaurants)
      }
      else{
        setRestaurants([])
      }
      setLoading(false)
    } catch (error) {
      console.log('error');
      setLoading(false)
    }
  }
  useEffect(()=> {
    fetchDrinks()
  },[searchRestaurant])

  return <AppContext.Provider value={{loading,searchRestaurant,searchState,searchLGA,restaurants}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
