const { userModel } = require("../model/User.model");

const User = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const newUser = await new userModel({
      first_name,
      last_name,
      email,
      password,
    });
    console.log(newUser);

    const addUser = await newUser.save();

    res.status(201).send(addUser);
  } catch (err) {
    res.status(500).send("Error in adding the user");
  }
};

const getUser = async (req, res) => {
  try {
    const getUser = await userModel.find();
    res.status(200).send(getUser);
  } catch (err) {
    res.status(500).send("Failed to get user data");
  }
};

module.exports = { User, getUser };
