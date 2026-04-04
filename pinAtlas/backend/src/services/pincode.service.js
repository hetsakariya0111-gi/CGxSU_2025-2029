const Pincode = require('../models/Pincode');

function escapeRegex(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

exports.getStates = async () => {
  const states = await Pincode.distinct('state');
  return states.filter(Boolean).sort((a, b) => a.localeCompare(b));
};

exports.getDistricts = async (state) => {
  const docs = await Pincode.find({ state }).select('district -_id').lean();
  const districts = [...new Set(docs.map((doc) => doc.district))].filter(Boolean);
  return districts.sort((a, b) => a.localeCompare(b));
};

exports.getTaluks = async (state, district) => {
  const docs = await Pincode.find({ state, district }).select('taluk -_id').lean();
  const taluks = [...new Set(docs.map((doc) => doc.taluk))].filter(Boolean);
  return taluks.sort((a, b) => a.localeCompare(b));
};

exports.getPincodes = async (query) => {
  const page = Math.max(1, parseInt(query.page, 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit, 10) || 20));
  const { state, district, taluk } = query;
  const filter = {};

  if (state) filter.state = state;
  if (district) filter.district = district;
  if (taluk) filter.taluk = taluk;

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Pincode.find(filter).skip(skip).limit(limit).lean(),
    Pincode.countDocuments(filter),
  ]);

  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: total === 0 ? 0 : Math.ceil(total / limit),
    },
  };
};

exports.searchPincodes = async (q) => {
  const trimmed = (q || '').trim();
  if (!trimmed) {
    return [];
  }
  const escaped = escapeRegex(trimmed);
  const filter = {
    $or: [
      { pincode: { $regex: `^${escaped}` } },
      { officeName: { $regex: escaped, $options: 'i' } },
    ],
  };

  return Pincode.find(filter).limit(20).lean();
};

exports.getPincode = async (pincode) => {
  return Pincode.findOne({ pincode }).lean();
};

exports.getExportCursor = (query) => {
  const { state, district, taluk } = query;
  const filter = {};

  if (state) filter.state = state;
  if (district) filter.district = district;
  if (taluk) filter.taluk = taluk;

  return Pincode.find(filter).lean().cursor();
};
