import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://restaurants.bsite.net/api/Restaurants';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchRestaurant, setSearchRestaurant] = useState('');
  const [searchState, setSearchState] = useState('');
  const [searchLGA, setSearchLGA] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const newRestaurants = data.map(
          ({
            restaurantId,
            restaurantName,
            restaurantImageUrl,
            serviceType,
            streetName,
          }) => {
            return {
              id: restaurantId,
              name: restaurantName,
              image: restaurantImageUrl,
              info: serviceType,
              glass: streetName,
            };
          }
        );
        setRestaurants(newRestaurants);
      } else {
        setRestaurants([]);
      }
      setLoading(false);
    } catch (error) {
      console.log('error');
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchDrinks();
  }, [searchRestaurant, fetchDrinks]);

  

  return (
    <AppContext.Provider
      value={{
        loading,
        searchRestaurant,
        setSearchRestaurant,
        searchState,
        setSearchState,
        searchLGA,
        setSearchLGA,
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
