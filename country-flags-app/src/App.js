import React from 'react';
import AppRoutes from './routes';
import axios from 'axios';


const API_URL = 'https://restcountries.com/v3.1/all?fields=flags,name';
export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const App = () => {
  return <AppRoutes />;
};

export default App;