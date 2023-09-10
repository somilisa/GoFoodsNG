import React, { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../context';
import { BiSearch } from 'react-icons/bi';
import { data } from '../data';

const SearchForm = ({ filters, setFilters }) => {
  // fetching states
  const stateUrl = 'https://restaurants.bsite.net/api/StatesWithLGA';

  const [states, setStates] = useState([]);

  const fetchStates = async () => {
    try {
      const response = await fetch(`${stateUrl}`);
      const newStates = await response.json();
      setStates(newStates);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStates();
  });

  // let LGA;

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className='form-control'>
          <button>
            <BiSearch className='search-icon' />
          </button>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name of Restaurant,Cuisine'
            value={filters.name}
            onChange={(event) => {
              event.preventDefault();
              setFilters((prev) => ({ ...prev, name: event.target.value }));
            }}
          />
        </div>

        <div className='form-control'>
          <select
            value={filters.state}
            onChange={(event) => {
              event.preventDefault();
              setFilters((prev) => ({ ...prev, state: event.target.value }));
            }}
          >
            <option value=''>State</option>
            {states.map(({ stateId, name }) => (
              <option key={stateId}>{name}</option>
            ))}
          </select>
        </div>

        <div className='form-control'>
          <select
            name='state'
            id='state'
            value={filters.lga}
            onChange={(event) => {
              event.preventDefault();
              setFilters((prev) => ({ ...prev, lga: event.target.value }));
            }}
          >
            <option value=''>LG Area</option>
            {/* {LGA.map((stateId, name, localGovernments) => {
              <option key={stateId}>{localGovernments}</option>;
            })} */}
          </select>
        </div>
        <button className='search-btn'>Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
