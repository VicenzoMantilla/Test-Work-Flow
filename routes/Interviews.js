const express = require('express');
const router = express.Router();
const interviews = require('../controllers/Interviews');
const validation = require('../validations/Interviews')


router.get('/', interviews.getInterviews);
router.get('/:id_clients', interviews.getInterviewsByClient);
router.delete('/:id', interviews.deleteInterview);

module.exports = router;