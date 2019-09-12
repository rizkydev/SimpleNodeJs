// get the client
const mysql = require('mysql2');

// create the connection pool to database
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});

module.exports = pool;