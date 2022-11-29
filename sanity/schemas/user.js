export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "licenseNumber",
      title: "License Number",
      type: "string",
    },
    {
      name: "isBanned",
      title: "Is Banned",
      type: "boolean",
    },
    {
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
    },
    {
      name: "resetPasswordToken",
      title: "Reset Password Token",
      type: "string",
    },
    {
      name: "resetPasswordExpire",
      title: "Reset Password Expire",
      type: "number",
    },
  ],
};
