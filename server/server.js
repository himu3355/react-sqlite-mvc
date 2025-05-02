const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const apis = require('./routers/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apis);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.env} mode`);
});