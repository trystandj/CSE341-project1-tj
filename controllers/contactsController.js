/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongodb = require("../data/database");
const { ObjectId } = require("mongodb");

const getAllContacts = async (req, res, next) => {
  try {
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .find()
      .toArray((err, data) => {
        if (err) {
          res.status(500).json({ message: "Error fetching contacts", error: err });
        } else {
          return data;
        }
      });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: err.message });
  }
};

// #swagger.tags = ['Contacts']
// #swagger.description = 'Get contact by ID'
const getcontactById = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .findOne({ _id: contactId });

    if (result) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching contact", error: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const response = await mongodb
      .getDb()
      .collection("contacts")
      .insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ message: "Error creating contact" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating contact", error: err.message });
  }
};

const updateContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const response = await mongodb
      .getDb()
      .collection("contacts")
      .replaceOne({ _id: contactId }, contact);
    if (response.matchedCount == 0) {
      return res.status(404).json({ message: "Contact not found" });
    }
    if (response.modifiedCount > 0) {
      res.status(200).json({ message: "Contact updated successfully" });
    } else {
      res.status(500).json({ message: "No changes made to contact" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating contact", error: err.message });
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .collection("contacts")
      .deleteOne({ _id: contactId });
    if (response.deletedCount > 0) {
      res.status(200).json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting contact", error: err.message });
  }
};
module.exports = {
  getAllContacts,
  getcontactById,
  createContact,
  updateContact,
  deleteContact,
};
