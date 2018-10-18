const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/friends", express.static("data"))

app.get("/api/friends", function(req, res) {
  return res.json();
});

app.post("/api/friends", function(req, res) {
  let newFriend = req.body

  console.log(newFriend);


});