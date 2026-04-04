const { buildMeta, errorEnvelope } = require('./asyncWrapper');

const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json(
    errorEnvelope(message, buildMeta())
  );
};

module.exports = errorHandler;
