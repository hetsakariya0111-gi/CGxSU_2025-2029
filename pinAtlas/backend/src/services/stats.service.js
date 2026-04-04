const Pincode = require('../models/Pincode');

exports.getGeneralStats = async () => {
  const [
    totalPincodes,
    statesDist,
    deliveryOffices,
    nonDeliveryOffices
  ] = await Promise.all([
    Pincode.countDocuments(),
    Pincode.distinct('state'),
    Pincode.countDocuments({ deliveryStatus: 'Delivery' }),
    Pincode.countDocuments({ deliveryStatus: 'Non-Delivery' })
  ]);

  return {
    totalPincodes,
    totalStates: statesDist.length,
    deliveryOffices,
    nonDeliveryOffices
  };
};

exports.getStateDistribution = async () => {
  const distribution = await Pincode.aggregate([
    { $group: { _id: "$state", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 28 },
    { $project: { state: "$_id", count: 1, _id: 0 } }
  ]);
  
  return distribution;
};

exports.getDeliveryDistribution = async () => {
  const [delivery, nonDelivery] = await Promise.all([
    Pincode.countDocuments({ deliveryStatus: 'Delivery' }),
    Pincode.countDocuments({ deliveryStatus: 'Non-Delivery' })
  ]);

  return { delivery, nonDelivery };
};
