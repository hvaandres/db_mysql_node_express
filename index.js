const express = require("express");
const mysql = require("mysql");

// Create my connection

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
});

// Connect Database to node

database.connect((err) => {
  if (err) {
    throw err;
    console.log("Something went wrong");
  }
  console.log("Our SQL is connected successfully");
});

const app = express();

// Create our DataBase

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE  little";
  database.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database has been created...");
  });
});

app.listen("3000", () => {
  console.log("server started on port 3000");
});
