import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/api';
import './CountryGrid.css';
import Grid from '@react-css/grid';
import GridItem from '@react-css/grid/dist/src/components/GridItem';

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  const handleFlagClick = (country) => {
    console.log('Country clicked:', country);
    // Add navigation logic here if needed
  };

  return (
    <Grid className="grid-container">
      {countries.map((country) => (
        <GridItem
          key={country.cca3}
          className="grid-item"
          onClick={() => handleFlagClick(country)}
        >
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
          <p>{country.name.common}</p>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CountryGrid;