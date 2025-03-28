export class CountryController {
    private countryService: CountryService;

    constructor() {
        this.countryService = new CountryService();
    }

    public async getAllCountries(req, res) {
        try {
            const countries = await this.countryService.fetchAllCountries();
            res.status(200).json(countries);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving countries' });
        }
    }

    public async getCountryDetails(req, res) {
        const countryName = req.params.name;
        try {
            const countryDetails = await this.countryService.fetchCountryDetails(countryName);
            if (countryDetails) {
                res.status(200).json(countryDetails);
            } else {
                res.status(404).json({ message: 'Country not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving country details' });
        }
    }
}