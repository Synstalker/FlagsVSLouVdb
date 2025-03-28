import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state;

  if (!country) {
    return <p>No country selected.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>{country.name.common}</h1>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
    </div>
  );
};

export default CountryDetail;