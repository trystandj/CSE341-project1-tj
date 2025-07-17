const { Validator } = require('node-input-validator');

const saveContact = async (req, res, next) => {
  const v = new Validator(req.body, {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    favoriteColor: 'required|string',
    birthday: 'required|date',
  });

  const matched = await v.check();

  if (!matched) {
    return res.status(412).send({
      success: false,
      message: 'Validation failed',
      data: v.errors,
    });
  }

  next();
};

module.exports = {
  saveContact,
};
