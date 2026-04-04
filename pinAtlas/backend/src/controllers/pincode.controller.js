const { Transform } = require('stream');
const pincodeService = require('../services/pincode.service');
const { buildMeta, successEnvelope, errorEnvelope } = require('../middleware/asyncWrapper');

exports.getStates = async (req, res) => {
  const states = await pincodeService.getStates();
  const total = states.length;
  res.json(
    successEnvelope(states, 'States retrieved successfully', buildMeta({
      page: 1,
      limit: total,
      total,
      totalPages: 1,
    }))
  );
};

exports.getDistricts = async (req, res) => {
  const { state } = req.params;
  if (!state || !state.trim()) {
    return res.status(400).json(errorEnvelope('State is required', buildMeta()));
  }
  const districts = await pincodeService.getDistricts(state);
  const total = districts.length;
  res.json(
    successEnvelope(districts, 'Districts retrieved successfully', buildMeta({
      page: 1,
      limit: total,
      total,
      totalPages: 1,
    }))
  );
};

exports.getTaluks = async (req, res) => {
  const { state, district } = req.params;
  if (!state || !state.trim() || !district || !district.trim()) {
    return res.status(400).json(errorEnvelope('State and district are required', buildMeta()));
  }
  const taluks = await pincodeService.getTaluks(state, district);
  const total = taluks.length;
  res.json(
    successEnvelope(taluks, 'Taluks retrieved successfully', buildMeta({
      page: 1,
      limit: total,
      total,
      totalPages: 1,
    }))
  );
};

exports.getPincodes = async (req, res) => {
  const result = await pincodeService.getPincodes(req.query);
  res.json(
    successEnvelope(result.data, 'Pincodes retrieved successfully', result.meta)
  );
};

exports.searchPincodes = async (req, res) => {
  const { q } = req.query;
  if (!q || !String(q).trim()) {
    return res.json(
      successEnvelope([], 'Search query empty', buildMeta({
        page: 1,
        limit: 0,
        total: 0,
        totalPages: 0,
      }))
    );
  }

  const results = await pincodeService.searchPincodes(q);
  const total = results.length;
  res.json(
    successEnvelope(results, 'Search completed successfully', buildMeta({
      page: 1,
      limit: total,
      total,
      totalPages: 1,
    }))
  );
};

exports.getPincode = async (req, res) => {
  const { pincode } = req.params;
  const result = await pincodeService.getPincode(pincode);

  if (!result) {
    return res.status(404).json(
      errorEnvelope(`Pincode ${pincode} not found`, buildMeta())
    );
  }

  res.json(
    successEnvelope(result, 'Pincode retrieved successfully', buildMeta({
      page: 1,
      limit: 1,
      total: 1,
      totalPages: 1,
    }))
  );
};

exports.exportCSV = (req, res, next) => {
  const { state } = req.query;
  const safeState = state && String(state).trim() ? String(state).replace(/[^\w\s-]/g, '') : 'all';
  const filename = `pinAtlas-export-${safeState}.csv`;

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

  const cursor = pincodeService.getExportCursor(req.query);

  res.write('Pincode,Office Name,Type,Delivery Status,Taluk,District,State,Division,Region\n');

  const escapeCell = (val) => {
    if (val === undefined || val === null) return '';
    const s = String(val);
    if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };

  const transformStream = new Transform({
    objectMode: true,
    transform(doc, enc, callback) {
      try {
        const line = [
          escapeCell(doc.pincode),
          escapeCell(doc.officeName),
          escapeCell(doc.officeType),
          escapeCell(doc.deliveryStatus),
          escapeCell(doc.taluk),
          escapeCell(doc.district),
          escapeCell(doc.state),
          escapeCell(doc.divisionName),
          escapeCell(doc.regionName),
        ].join(',') + '\n';
        callback(null, line);
      } catch (err) {
        callback(err);
      }
    },
  });

  const onError = (err) => {
    if (!res.headersSent) {
      next(err);
    } else {
      res.end();
    }
  };

  cursor.on('error', onError);
  transformStream.on('error', onError);
  res.on('error', onError);

  cursor.pipe(transformStream).pipe(res);
};
