const mongodb = require("../data/database");
const { ObjectId } = require("mongodb");

const getAllcontacts = async (req, res, next) => {
  try {
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .find()
      .toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: err.message });
  }
};

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

module.exports = {
  getAllcontacts,
  getcontactById,
};
