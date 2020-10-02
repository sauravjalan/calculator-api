const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Router } = require("express");
const port = process.env.PORT || 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

// here
app.get("/", (req, res) => {
  console.log("GET REQ");
  return res.json({ message: "Hello world!" });
});

app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(200).json({ message: "Invalid data types" });
  }
  let sum = num1 + num2;

  if (num1 >= 1000000 || num2 >= 1000000 || sum >= 1000000) {
    return res.status(200).json({ message: "Overflow" });
  }
  res.status(200).json({ message: "the sum of given two numbers", sum: sum });
});

app.post("/sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(200).json({ message: "Invalid data types" });
  }
  if (num1 <= -1000000 || num2 <= -1000000) {
    return res.status(200).json({ message: "Underflow" });
  }
  let sub = num1 - num2;
  res
    .status(200)
    .json({ message: "the difference of given two numbers", difference: sub });
});

app.post("/multiply", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return res.status(200).json({ message: "Invalid data types" });
  }
  let mul = num1 * num2;
  if (num1 >= 1000000 || num2 >= 1000000 || mul > 1000000) {
    return res.status(200).json({ message: "Overflow" });
  }

  res
    .status(200)
    .json({ message: "The product of given numbers", result: mul });
});

app.post("/divide", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (num2 === 0) {
    return res.status(200).json({ message: "Cannot divide by zero" });
  }
  let div = num1 / num2;
  res
    .status(200)
    .json({ message: "The division of given numbers", result: div });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
