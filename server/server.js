// create an express app
const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const { requireAuth } = require("./middleware/auth.middleware");
// connect to the database and display a message if successful and if not log the error
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/express-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Hello World");
});
// test route to see if requireAuth middleware is working
app.get("/test", requireAuth, (req, res) => {
  res.send("Welcome to this exclusive club");
});
app.use("/api/v1/user", require("./routes/user.route"));

// listen on port 8000
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
