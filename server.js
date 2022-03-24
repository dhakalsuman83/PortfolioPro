require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require("./route/contactRoute");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/", contactRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
