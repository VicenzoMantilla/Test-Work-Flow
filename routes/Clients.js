const express = require('express');
const router = express.Router();
const clients = require('../controllers/Clients');
const validation = require('../validations/Clients')

router.get('/', clients.getClients);
router.get('/:id', clients.getOneClient);
router.post(
    '/',
    validation.validateClient,
    clients.createClient
);
router.put('/:id', clients.updateClient);
router.delete('/:id', clients.deleteClient);

module.exports = router;