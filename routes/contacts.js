/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const validate = require("../utilities/contactValidation");


const contactsController = require("../controllers/contactsController");

// #swagger.tags = ['Contacts']
// #swagger.description = 'Get all contacts'
router.get("/contacts", contactsController.getAllContacts);


router.get("/contacts/:id", contactsController.getcontactById);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Create a new contact'
router.post("/contacts/", validate.saveContact, contactsController.createContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Update an existing contact'
router.put("/contacts/:id", validate.saveContact, contactsController.updateContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Delete a contact by ID'
router.delete("/contacts/:id", contactsController.deleteContact);

module.exports = router;
