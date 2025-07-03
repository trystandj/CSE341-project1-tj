const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController'); 

router.get('/contacts', contactsController.getAllcontacts);
router.get('/contacts/:id', contactsController.getcontactById);

module.exports = router;