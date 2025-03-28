const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://restcountries.com/v3.1';

// Retrieve all countries
router.get('/countries', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, {
      params: { fields: 'flags,name' },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

// Retrieve details of a specific country by name
router.get('/countries/:name', async (req, res) => {
  const countryName = req.params.name;
  try {
    const response = await axios.get(`${BASE_URL}/name/${countryName}`, {
      params: { fields: 'name,flags,population,capital' },
    });
    res.json(response.data[0]); // Return the first match
  } catch (error) {
    console.error('Error fetching country details:', error.message);
    res.status(404).json({ error: 'Country not found' });
  }
});

module.exports = router;