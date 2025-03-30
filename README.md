--------------------------------

# OM Coding Challenge: Flag Explorer App: **
The Round up, error log and fix for NPM React-CSS-Grid involved Co-Pilot, The Global Cyber Security Community - @Defcon and @Bsides @OWASP, 
API support from MVPs in the EU, and Site and Security Operations Creator – Hakware.
3 Days : From inception to troubleshooting and f\Solutions integration and Pixel Pushing

Swaggger and v3.1 did not match 
Swagger Configuration was outdated, due to the DevOps nature, we assumed this as part of the text.
I used PostMan to get the API to work and RestCountries would flick between having Points there to pulling jumbled – From what I saw, it is a glitch and documented with  Restcountries.com
Submission
1.A GitHub repository link containing:
Complete source code for the backend and frontend.
Tests for both parts.
Pipeline YAML file.
A README.md with clear instructions on how to set up and run the application.
A .gitignore file

-----------------------------------------------------------------


# FlagsVSLouVdb

FlagsVSLouVdb is a multi-application project that provides tools for exploring country data and flags. It consists of three main components:

1. **Country API**: A RESTful API for retrieving country information.
2. **Country Flags App**: A React-based frontend application for displaying country flags and details.
3. **World Flags**: A feature-rich frontend application for searching, filtering, and exploring country data with a light/dark theme toggle.

## Project Structure

```
FlagsVSLouVdb/
├── country-api/          # Backend API for country data
├── country-flags-app/    # React app for displaying country flags
├── world-flags/          # Advanced React app for exploring country data
```

## Applications Overview

### 1. Country API
- **Description**: A REST API that provides endpoints to retrieve country data, including names, flags, populations, and capitals.
- **Tech Stack**: Node.js, Express, TypeScript.
- **Endpoints**:
  - `GET /countries`: Retrieve a list of all countries.
  - `GET /countries/:name`: Retrieve details about a specific country.
- **Documentation**: OpenAPI specification available in `country-api/src/swagger/country-api.yaml`.

### 2. Country Flags App / OLD / UNUSED
- **Description**: NOT USED but wished to keep issues for futher investigation A simple React app that fetches and displays country flags and names using the REST Countries API.
- **Tech Stack**: React, Axios.
- **Features**:
  - Displays a grid of country flags and names.
  - Clickable flags to view additional details (to be implemented).

### 3. World Flags
- **Description**: A more advanced React app for exploring country data with additional features.
- **Tech Stack**: React, React Router, Context API, Axios.
- **Features**:
  - Search for countries by name.
  - Filter countries by region.
  - View detailed information about a country, including population, capital, and borders.
  - Toggle between light and dark themes.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd FlagsVSLouVdb
   ```

2. Install dependencies for each application:
   ```bash
   cd country-api
   npm install
   cd ../country-flags-app
   npm install
   cd ../world-flags
   npm install
   ```

3. Start the applications:
   - **Country API**:
     ```bash
     cd country-api
     npm start
     ```
     The API will run on `http://localhost:3000`.

   - **Country Flags App**:
     ```bash
     cd country-flags-app
     npm start
     ```
     The app will run on `http://localhost:3000`.

   - **World Flags**:
     ```bash
     cd world-flags
     npm start
     ```
     The app will run on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing country data.
