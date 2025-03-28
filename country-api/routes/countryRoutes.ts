import { Router } from 'express';
import countryController from '../controllers/countryController';

const router = Router();

router.get('/countries', countryController.getAllCountries);
router.get('/countries/:name', countryController.getCountryByName);

export default router;
