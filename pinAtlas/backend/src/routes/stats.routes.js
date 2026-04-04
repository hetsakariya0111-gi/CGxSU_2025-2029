const express = require('express');
const router = express.Router();
const statsController = require('../controllers/stats.controller');
const asyncWrapper = require('../middleware/asyncWrapper');

router.get('/state-distribution', asyncWrapper(statsController.getStateDistribution));
router.get('/delivery-distribution', asyncWrapper(statsController.getDeliveryDistribution));
router.get('/', asyncWrapper(statsController.getGeneralStats));

module.exports = router;
