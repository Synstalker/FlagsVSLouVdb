export class CountryService {
    private countries: { name: string; flag: string; population: number }[] = [
        { name: 'United States', flag: '🇺🇸', population: 331002651 },
        { name: 'Canada', flag: '🇨🇦', population: 37742154 },
        { name: 'Mexico', flag: '🇲🇽', population: 128932753 },
        // Add more countries as needed
    ];

    public fetchAllCountries() {
        return this.countries;
    }

    public fetchCountryDetails(name: string) {
        const country = this.countries.find(country => country.name.toLowerCase() === name.toLowerCase());
        if (!country) {
            throw new Error('Country not found');
        }
        return country;
    }
}