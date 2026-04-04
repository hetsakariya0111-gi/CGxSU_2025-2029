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

if (process.env.NODE_ENV === 'production' || process.env.TRUST_PROXY === '1') {
  app.set('trust proxy', 1);
}

/** Live static site on Render; CLIENT_URL env overrides or extends (comma-separated). */
const PROD_CLIENT_FALLBACK = 'https://pin-atlas-het-sakariya-3ti8.onrender.com';

function parseClientOrigins() {
  const raw =
    process.env.CLIENT_URL ||
    (process.env.NODE_ENV === 'production' ? PROD_CLIENT_FALLBACK : '');
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function corsOrigin(origin, callback) {
  if (!origin) return callback(null, true);
  const allowed = parseClientOrigins();
  if (allowed.includes(origin)) return callback(null, true);
  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) {
      return callback(null, true);
    }
    if (
      /^https?:\/\/(10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})(:\d+)?$/i.test(
        origin
      )
    ) {
      return callback(null, true);
    }
    return callback(null, false);
  }
  // Production: any Render static URL (previews + prod) + explicit CLIENT_URL / fallback list
  if (/^https:\/\/[a-z0-9]([a-z0-9-]*[a-z0-9])?\.onrender\.com$/i.test(origin)) {
    return callback(null, true);
  }
  return callback(null, false);
}

app.use(helmet());
app.use(cors({ origin: corsOrigin }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    service: 'PinAtlas API',
    status: 'running',
    message: 'This is the REST API. Use /api/* routes from your frontend.',
    endpoints: {
      health: '/health',
      stats: 'GET /api/stats',
      pincodes: 'GET /api/pincodes',
      search: 'GET /api/search?q=',
    },
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, uptime: Math.floor(process.uptime()) });
});

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
