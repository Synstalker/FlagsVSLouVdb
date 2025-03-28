# Country API

## Overview
The Country API provides endpoints to retrieve information about countries. It allows users to fetch a list of all countries and details about a specific country.

## Endpoints
- `GET /countries`: Retrieve a list of all countries.
- `GET /countries/{name}`: Retrieve details about a specific country by name.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd country-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## OpenAPI Specification
The OpenAPI 3.0.0 specification for the Country API can be found in the `src/openapi/country-api.yaml` file. This file defines the API endpoints, request parameters, and response schemas.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.