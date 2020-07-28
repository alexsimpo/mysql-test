const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mysql-test",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log("Working");
    } else {
        console.log(err);
    }
});

module.exports = mysqlConnection;