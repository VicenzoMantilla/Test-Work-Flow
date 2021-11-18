const express = require('express');
const router = express.Router();
const profiles = require('../controllers/profiles');
const validation = require('../validations/profiles')

router.get('/', profiles.getProfiles);
router.post(
    '/',
    validation.validateProfile,
    profiles.addProfile
    );
router.put('/:id', profiles.updateProfile);
router.delete('/:id', profiles.deleteProfile);

module.exports = router;