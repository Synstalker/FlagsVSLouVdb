const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your Express app

describe('Country API Endpoints', () => {
  it('should fetch all countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should fetch a specific country by name', async () => {
    const countryName = 'France';
    const res = await request(app).get(`/countries/${countryName}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(countryName);
  });

  it('should return 404 for a non-existent country', async () => {
    const res = await request(app).get('/countries/NonExistentCountry');
    expect(res.statusCode).toEqual(404);
  });
});