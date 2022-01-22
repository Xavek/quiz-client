const Joi = require("joi");
const schema = Joi.object({
  username: Joi.string().alphanum().min(4).max(8).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

function userDataValidate(userInputData) {
  let err = {};

  err = schema.validate(userInputData);
  if (err.message) {
    return err.message;
  } else {
    return null;
  }
}
module.exports = userDataValidate;
