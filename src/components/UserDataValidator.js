const Joi = require("joi");
const schema = Joi.object({
  username: Joi.string().alphanum().min(4).max(8).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

function userDataValidate(userInputData) {
  console.log(userInputData);
  const { error } = schema.validate(userInputData);
  if (error.message) {
    return error.message;
  } else {
    return null;
  }
}
module.exports = userDataValidate;
