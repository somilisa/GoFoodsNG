// @ts-nocheck

import React, { useState, useEffect, useCallback } from 'react';
import Hero from '../components/Hero';
import bg from '../Assets/groups-hero.png';
import CocktailList from '../components/CocktailList';
import { useGlobalContext } from '../context';
import { Filterkeys } from '../types';

//Define the base url

const Groups = () => {
  const { loading, setLoading, searchRestaurant, searchState } =
    useGlobalContext();

  const [restaurants, setRestaurants] = useState([]);

  const [filters, setFilters] = useState<{ [T in Filterkeys]: string }>({
    restaurantName: '',
    stateId: '',
    localGovernmentId: '',
  });

  const filteredParams = Object.fromEntries(
    Object.entries(filters).filter(
      ([key, value]) => value !== undefined && value !== ''
    )
  );

  useEffect(() => {
    const baseUrl =
      'https://restaurants.bsite.net/api/Restaurants/SearchRestaurants';
    const url = new URL(baseUrl);
    url.search = new URLSearchParams(filteredParams).toString();
    console.log(url);
    const fetchData = async () => {
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
        // onDataFetched(apiData); // Pass the data to the parent component
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [JSON.stringify(filters)]);

  return (
    <main>
      <Hero
        filters={filters}
        setFilters={setFilters}
        imgUrl={bg}
        title='Find your table'
        home={true}
      />
      {/* <ImageSlider /> */}
      <CocktailList
        title='Best Local Restaurant Around You'
        className='section-title'
        loading={loading}
        data={restaurants}
      />
    </main>
  );
};

export default Groups;
