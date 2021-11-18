const express = require('express');
const router = express.Router();
const postulations = require('../controllers/postulations');
const validation = require('../validations/postulations')

router.get('/', postulations.getPostulations);
router.get('/:id', postulations.getPostulationById);
router.get('/byClient/:id_clients', postulations.getPostulationByClient);
router.get('/byProfile/:id_profile', postulations.getPostulationByProfile);
router.post(
    '/',
    validation.validatePostulation,
    postulations.addPostulation
    );
router.put('/:id', postulations.updatePostulation);
router.delete('/:id', postulations.deletePostulation);

module.exports = router;