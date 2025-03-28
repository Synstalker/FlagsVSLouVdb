const express = require('express');
const router = express.Router();
const countries = require('../data/countries.json');

// Retrieve all countries
router.get('/countries', (req, res) => {
  const countryList = countries.map(({ name, flag }) => ({ name, flag }));
  res.json(countryList);
});

// Retrieve details of a specific country by name
router.get('/countries/:name', (req, res) => {
  const countryName = req.params.name.toLowerCase();
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName
  );

  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ error: 'Country not found' });
  }
});

module.exports = router;