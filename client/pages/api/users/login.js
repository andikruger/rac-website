import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
import client from "../../../utils/client";

const handler = nc();

handler.post(async (req, res) => {
  const email = req.body.email.toLowerCase();
  const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {
    email: email,
  });

  if (
    user &&
    bcrypt.compareSync(req.body.password, user.password) &&
    !user.isBanned
  ) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    res.send({
      success: true,
      message: `Welcome back ${user.name}`,
      token,
      name: user.name,
    });
    // redirect to home page
    res.redirect("/");
  } else {
    res
      .status(401)
      .send({ success: false, message: "Invalid email or password" });
  }
});

export default handler;
