import { Request, Response } from 'express';
import countryService from '../services/countryService';

class CountryController {
    async getAllCountries(req: Request, res: Response) {
        try {
            const countries = await countryService.getAllCountries();
            res.json(countries);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve countries' });
        }
    }

    async getCountryByName(req: Request, res: Response) {
        try {
            const { name } = req.params;
            const country = await countryService.getCountryByName(name);
            if (country) {
                res.json(country);
            } else {
                res.status(404).json({ error: 'Country not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve country details' });
        }
    }
}

export default new CountryController();
