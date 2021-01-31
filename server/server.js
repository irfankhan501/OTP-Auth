const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const app = express();

// const mongoURI = `mongodb://localhost:27017/users`;

const mongoURI = `mongodb+srv://student:student123@cluster0.qlvi2.mongodb.net/users?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { number, name, email } = req.body;
  const user = new User({
    number,
    name,
    email,
  });

  await user.save();

  res.send(user);
});

app.post("/signin", async (req, res) => {
  const { number } = req.body;
  const user = await User.find({ number });
  res.send(user);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server runnuing on ${PORT}...`));
