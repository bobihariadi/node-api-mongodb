const express = require('express')
const mysql = require('mysql')

// Connect DB MyQL
var mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'db_restci',
    multipleStatements: true
});

mysqlConn.connect((err) => {
    if (!err)
        console.log('DB connection succeded');
    else
        console.log('DB failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


module.exports = mysqlConn
 