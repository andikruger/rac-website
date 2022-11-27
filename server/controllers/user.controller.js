const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const maxAge = 30 * 24 * 60 * 60;
// handel errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  // incorrect email
  if (err.message === "The email could not be found") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "Email or password is incorrect") {
    errors.password = "That password is incorrect";
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res
      .status(201)
      .json({ success: true, message: `Welcome to RAC ${user.name}` });
  } catch (err) {
    const errors = handleErrors(err);
    // remove all keys with empty values and store it in a new object in the form of message: errors
    const message = Object.keys(errors).reduce((acc, key) => {
      if (errors[key]) {
        acc[key] = errors[key];
      }
      return acc;
    }, {});

    res.status(400).json({
      success: false,
      message,
    });
  }
};

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      success: true,
      message: `Welcome back ${user.name}`,
      token: token,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    const errors = handleErrors(err);
    const message = Object.keys(errors).reduce((acc, key) => {
      if (errors[key]) {
        acc[key] = errors[key];
      }
      return acc;
    }, {});
    res.status(400).json({
      success: false,
      message,
    });
  }
};

exports.forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({
      success: false,
      message: {
        email: "The email could not be found",
      },
    });
  } else {
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    const message = `
            <p>You have requested a password reset</p>
            <p>Click this <a href="http://localhost:3000/reset/${resetToken}">link</a> to reset your password</p>
            `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password reset token",
        text: message,
      });
      res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Email could not be sent",
      });
    }
  }
};

exports.resetPasswordController = async (req, res, next) => {
  const resetPasswordToken = req.params.resetToken;

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400).json({
        success: false,
        message: { token: "The token is invalid or has expired" },
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      message: "Password was updated successfully, please login again",
    });
  } catch (err) {
    const errors = handleErrors(err);
    const message = Object.keys(errors).reduce((acc, key) => {
      if (errors[key]) {
        acc[key] = errors[key];
      }
      return acc;
    }, {});
    res.status(400).json({
      success: false,
      message,
    });
  }
};
