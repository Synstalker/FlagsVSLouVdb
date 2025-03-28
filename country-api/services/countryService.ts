import countries from '../data/countries';

class CountryService {
    async getAllCountries() {
        return countries;
    }

    async getCountryByName(name: string) {
        return countries.find(country => country.name.toLowerCase() === name.toLowerCase());
    }
}

export default new CountryService();
