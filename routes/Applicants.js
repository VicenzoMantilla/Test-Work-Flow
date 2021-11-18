const express = require('express');
const router = express.Router();
const applicants = require('../controllers/applicants');
const validation = require('../validations/applicants')

router.get('/', applicants.getApplicants);
router.get('/:id', applicants.getOneApplicant);
router.post(
    '/',
    validation.validateApplicant,
    applicants.createApplicant
);
router.put('/:id', applicants.updateApplicant);
router.delete('/:id', applicants.deleteApplicant);

module.exports = router;