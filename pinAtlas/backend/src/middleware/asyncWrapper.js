const asyncWrapper = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

function buildMeta(overrides = {}) {
  return {
    page: overrides.page ?? 1,
    limit: overrides.limit ?? 0,
    total: overrides.total ?? 0,
    totalPages: overrides.totalPages ?? 0,
  };
}

function successEnvelope(data, message, meta) {
  return {
    success: true,
    data,
    message,
    meta: meta ?? buildMeta(),
  };
}

function errorEnvelope(message, meta) {
  return {
    success: false,
    data: null,
    message,
    meta: meta ?? buildMeta(),
  };
}

module.exports = asyncWrapper;
module.exports.asyncWrapper = asyncWrapper;
module.exports.buildMeta = buildMeta;
module.exports.successEnvelope = successEnvelope;
module.exports.errorEnvelope = errorEnvelope;
