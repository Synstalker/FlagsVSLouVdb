# Coding Challenge: Flag Explorer App: 
The Round up, error log and fix for NPM React-CSS-Grid involved Co-Pilot, The Global Cyber Security Community - @Defcon and @Bsides @OWASP, API support from MVPs in the EU, and Site and Security Operations Creator – Hakware.
3 Days : From inception to troubleshooting and f\Solutions integration and Pixel Pushing

## Swaggger and v3.1 did not match 
Swagger Configuration was outdated, due to the DevOps nature, we assumed this as part of the text.
I used PostMan to get the API to work and RestCountries would flick between having Points there to pulling jumbled – From what I saw, it is a glitch and documented with  Restcountries.com
Submission

Coding Challenge: Flag Explorer App: 
The Round up, error log and fix for NPM React-CSS-Grid involved Co-Pilot, The Global Cyber Security Community - @Defcon and @Bsides @OWASP, API support from MVPs in the EU, and Site and Security Operations Creator – Hakware.
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

## Applications Overview

### 1. Country API
- **Description**: A REST API that provides endpoints to retrieve country data, including names, flags, populations, and capitals.
- **Tech Stack**: Node.js, Express, TypeScript.
- **Endpoints**:
  - `GET /countries`: Retrieve a list of all countries.
  - `GET /countries/:name`: Retrieve details about a specific country.
- **Tests**: Located in `country-api/tests/`.

### 2. Country Flags App
- **Description**: A simple React app that fetches and displays country flags and names using the REST Countries API.
- **Tech Stack**: React, Axios.
- **Features**:
  - Displays a grid of country flags and names.
  - Clickable flags to view additional details (to be implemented).
- **Tests**: Located in `country-flags-app/src/__tests__/`.

### 3. World Flags
- **Description**: A more advanced React app for exploring country data with additional features.
- **Tech Stack**: React, React Router, Context API, Axios.
- **Features**:
  - Search for countries by name.
  - Filter countries by region.
  - View detailed information about a country, including population, capital, and borders.
  - Toggle between light and dark themes.
- **Tests**: Located in `world-flags/src/__tests__/`.

## CI Pipeline

This repository includes a CI pipeline configured with GitHub Actions. The pipeline:
- Runs on every `push` or `pull_request` to the `main` branch.
- Installs dependencies and runs tests for all three components (`country-api`, `country-flags-app`, and `world-flags`).

Pipeline configuration is located in `.github/workflows/ci.yml`.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd FlagsVSLouVdb
