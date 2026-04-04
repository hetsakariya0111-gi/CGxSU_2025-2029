const express = require('express');
const router = express.Router();
const pincodeController = require('../controllers/pincode.controller');
const asyncWrapper = require('../middleware/asyncWrapper');

router.get('/states', asyncWrapper(pincodeController.getStates));
router.get('/states/:state/districts', asyncWrapper(pincodeController.getDistricts));
router.get('/states/:state/districts/:district/taluks', asyncWrapper(pincodeController.getTaluks));
router.get('/search', asyncWrapper(pincodeController.searchPincodes));
router.get('/export', pincodeController.exportCSV);
router.get('/pincodes', asyncWrapper(pincodeController.getPincodes));
router.get('/pincode/:pincode', asyncWrapper(pincodeController.getPincode));

module.exports = router;
