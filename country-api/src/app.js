const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
const PORT = 3000;

// Load Swagger YAML file
const swaggerDocument = yaml.load(fs.readFileSync('./src/swagger/country-api.yaml', 'utf8'));

// Middleware
app.use(bodyParser.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api', countryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});