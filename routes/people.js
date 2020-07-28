const express = require("express");
const router = express.Router();
const mysqlConnection = require("./connection");
const { reset } = require("nodemon");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM people", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    }
)});

module.exports = router;