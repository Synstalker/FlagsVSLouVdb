import express from 'express';
import countryRoutes from './routes/countryRoutes';

const app = express();

// ...existing code...

app.use('/api', countryRoutes);

// ...existing code...

export default app;
