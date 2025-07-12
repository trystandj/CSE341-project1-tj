/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contactsController");

// #swagger.tags = ['Contacts']
// #swagger.description = 'Get all contacts'
router.get("/contacts", contactsController.getAllcontacts);

router.get("/contacts/:id", contactsController.getcontactById);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Create a new contact'
router.post("/contacts/", contactsController.createContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Update an existing contact'
router.put("/contacts/:id", contactsController.updateContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Delete a contact by ID'
router.delete("/contacts/:id", contactsController.deleteContact);

module.exports = router;
