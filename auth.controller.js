const User = require("../model/auth.model");
const bcrypt = require('bcrypt');
const validator = require('validator');  // Optional: To validate email format

const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user
    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined // Do not send password in the response
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const Signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Compare password
    const isValidPassword = await bcrypt.compare(password, isUser.password);
    if (!isValidPassword) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...isUser._doc,
        password: undefined // Do not send password in the response
      }
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  Signup,
  Signin
};
