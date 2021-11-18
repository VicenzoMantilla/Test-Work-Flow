const express = require('express');
const router = express.Router();
const admins = require('../controllers/Admins');
const validation = require('../validations/Admins')

router.get('/', admins.getAdmins);
router.get('/:id', admins.getOneAdmin);
router.post(
    '/',
    validation.validateAdmin,
    admins.createAdmin
    );
router.put('/:id', admins.updateAdmin);
router.delete('/:id', admins.deleteAdmin);

module.exports = router;
