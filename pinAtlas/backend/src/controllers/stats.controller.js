const statsService = require('../services/stats.service');
const { buildMeta, successEnvelope } = require('../middleware/asyncWrapper');

exports.getGeneralStats = async (req, res) => {
  const stats = await statsService.getGeneralStats();
  res.json(
    successEnvelope(stats, 'General stats retrieved successfully', buildMeta({
      page: 1,
      limit: 1,
      total: 1,
      totalPages: 1,
    }))
  );
};

exports.getStateDistribution = async (req, res) => {
  const distribution = await statsService.getStateDistribution();
  const total = distribution.length;
  res.json(
    successEnvelope(distribution, 'State distribution retrieved successfully', buildMeta({
      page: 1,
      limit: total,
      total,
      totalPages: 1,
    }))
  );
};

exports.getDeliveryDistribution = async (req, res) => {
  const distribution = await statsService.getDeliveryDistribution();
  res.json(
    successEnvelope(distribution, 'Delivery distribution retrieved successfully', buildMeta({
      page: 1,
      limit: 1,
      total: 1,
      totalPages: 1,
    }))
  );
};
