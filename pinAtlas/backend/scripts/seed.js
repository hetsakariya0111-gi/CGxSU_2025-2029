const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const Pincode = require('../src/models/Pincode');

const BATCH_SIZE = 1000;

function mapRow(data) {
  return {
    pincode: String(data.Pincode || data.pincode || '').trim(),
    officeName: String(data['Office Name'] || data.officeName || '').trim(),
    officeType: (data.OfficeType || data.officeType || '').trim(),
    deliveryStatus: (data['Delivery Status'] || data.deliveryStatus || '').trim(),
    district: String(data.District || data.district || '').trim(),
    taluk: (data.Taluk || data.taluk || '').trim(),
    divisionName: (data.DivisionName || data.divisionName || '').trim(),
    regionName: (data.RegionName || data.regionName || '').trim(),
    state: String(data.StateName || data.State || data.state || '').trim(),
    circle: (data.CircleName || data.circle || '').trim(),
  };
}

function validateDoc(doc) {
  return doc.pincode && doc.officeName && doc.district && doc.state;
}

async function loadRows(csvFilePath) {
  const rows = [];
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => {
        const doc = mapRow(data);
        if (validateDoc(doc)) {
          rows.push(doc);
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });
  return rows;
}

async function insertBatch(batch, batchNo, totalBatches) {
  try {
    const inserted = await Pincode.insertMany(batch, { ordered: false });
    process.stdout.write(`Inserted batch ${batchNo}/${totalBatches} (${inserted.length} records)\n`);
    return inserted.length;
  } catch (err) {
    const partial =
      (err.insertedDocs && err.insertedDocs.length) ||
      err.result?.insertedCount ||
      (err.writeErrors && err.result?.nInserted) ||
      0;
    if (partial > 0) {
      process.stdout.write(
        `Inserted batch ${batchNo}/${totalBatches} (${partial} records, some duplicates skipped)\n`
      );
      return partial;
    }
    process.stdout.write(`Batch ${batchNo}/${totalBatches} had no new inserts (duplicates or error)\n`);
    return 0;
  }
}

async function seedDatabase() {
  await mongoose.connect(process.env.MONGO_URI);

  const csvFilePath = path.resolve(__dirname, '../../pincodes.csv');
  if (!fs.existsSync(csvFilePath)) {
    process.stderr.write(
      `Error: CSV file not found at ${csvFilePath}. Place 'pincodes.csv' in the pinAtlas project root.\n`
    );
    process.exit(1);
  }

  const rows = await loadRows(csvFilePath);
  const totalBatches = Math.max(1, Math.ceil(rows.length / BATCH_SIZE));
  let totalInserted = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const chunk = rows.slice(i, i + BATCH_SIZE);
    const batchNo = Math.floor(i / BATCH_SIZE) + 1;
    const n = await insertBatch(chunk, batchNo, totalBatches);
    totalInserted += n;
  }

  process.stdout.write(`\nSeeding completed. Total records inserted: ${totalInserted}\n`);
  await mongoose.connection.close();
  process.exit(0);
}

seedDatabase().catch((err) => {
  process.stderr.write(`Seeding failed: ${err.message}\n`);
  process.exit(1);
});
