require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/errorHandler');
const { buildMeta, errorEnvelope } = require('./src/middleware/asyncWrapper');

const pincodeRoutes = require('./src/routes/pincode.routes');
const statsRoutes = require('./src/routes/stats.routes');    

connectDB();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json(
      errorEnvelope('Too many requests from this IP, please try again after 15 minutes', buildMeta())
    );
  },
});

app.use('/api/', apiLimiter);

app.use('/api/stats', statsRoutes);
app.use('/api', pincodeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
