const axios = require('axios');
const express = require('express');
const router = express.Router();
const ProgramModel = require('../models/ProgramModel'); // Update the path based on your file structure
const BatchModel = require('../models/BatchModel'); // Update the path based on your file structure

// API endpoint to save Bundle data
router.post('/saveBundle', async (req, res) => {
  try {
    const response = await axios.get(`https://mitsde.edmingle.com/nuSource/api/v1/short/masterbatch`, {
      headers: {
        'ORGID': 3,
        'apiKey': 'c289e35991bdf067370b8db627e6dc80',
      },
    });
    const courses = response.data.courses;

    for (const course of courses) {
      const { bundle_id, bundle_name } = course;

      try {
        const bundle = await ProgramModel.findOrCreate({
          where: { program_id: bundle_id },
          defaults: {
            program_id: bundle_id,
            program_name: bundle_name,
          },
        });
        for (const batch of course.batch) {
          await BatchModel.findOrCreate({
            where: { batch_id: batch.class_id },
            defaults: {
              batch_id: batch.class_id,
              batch_name: batch.class_name,
              start_date: batch.start_date,
              end_date: batch.end_date,
              admitted_students: batch.admitted_students,
              program_id: bundle[0].dataValues.program_id,
            },
          });
        }

        console.log(`Data saved successfully for bundle_id: ${bundle_id}`);
      } catch (error) {
        console.error(`Error processing bundle_id ${bundle_id}:`, error.message);
        continue;
      }
    }

    res.status(201).json({ message: 'Data saved successfully.' });
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;




