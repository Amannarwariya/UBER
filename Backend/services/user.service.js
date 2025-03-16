const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const user = new userModel({
    fullname: { firstname, lastname },
    email,
    password,
  });

  // Save user to the database
  await user.save();
  return user;
};
