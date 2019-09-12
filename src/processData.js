var express = require('express');
var db = require('./db');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("Connected!");
    res.json({ code: 200, message: 'Test' })
})

router.post('/insertData', function (req, res) {
    var inputUser = req.body.inputUser;
    var inputPassword = req.body.inputPassword;
    if (inputUser == null) {
        inputUser = '';
    }

    if (inputPassword == null) {
        inputPassword = '';
    }
    var query = 'insert into tblUser (user, password) values (?, ?)';
    db.getConnection(function (error, conn) {
        db.query(query, [inputUser, inputPassword], function(error) {
            if (error) throw error;
            console.log("Insert Data Success !");
            res.send({
                code: 200,
                message: "Insert Data Success"
            });
        });
    });
});

router.post('/updateData', function (req, res) {
    var inputID = req.body.inputID;
    var inputUser = req.body.inputUser;
    var inputPassword = req.body.inputPassword;

    if (inputID == null) {
        inputID = '';
    }

    if (inputUser == null) {
        inputUser = '';
    }

    if (inputPassword == null) {
        inputPassword = '';
    }
    var query = 'update tblUser set user = ?, password = ? where id = ?';
    db.getConnection(function (error, conn) {
        db.query(query, [inputUser, inputPassword, inputID], function(error, result) {
            if (error) throw error;
            console.log("Update Data Success !");
            console.log(result);
            res.send({
                code: 200,
                message: "Update Data Success"
            });
        });
    });
});

router.post('/deleteData', function (req, res) {
    var inputID = req.body.inputID;

    if (inputID == null) {
        inputID = '';
    }

    var query = 'Delete from tblUser where id = ?';
    db.getConnection(function (error, conn) {
        db.query(query, [inputID], function(error, result) {
            if (error) throw error;
            console.log("Delete Data Success !");
            console.log(result);
            res.send({
                code: 200,
                message: "Delete Data Success"
            });
        });
    });
});

router.post('/searchData', function (req, res) {
    var inputUser = req.body.inputUser;
    if (inputUser == null) {
        inputUser = '';
    }
    db.getConnection(function (error, conn) {
        var response = [];
        var query = 'select * from tblUser where user = ?';
        db.query(query, [inputUser], function(error, rows) {
            if (error) throw error;
            console.log("Search Data Success !");
            for (var i = 0; i < rows.length; i++) {
                response.push({
                    id: rows[i].id,
                    user: rows[i].user
                });
            }
            res.send({
                code: 200,
                message: "Search Data Success",
                data: response
            });
        });
    });
});

router.post('/readData', function (req, res) {
    db.getConnection(function (error, conn) {
        var response = [];
        var query = 'select * from tblUser';
        db.query(query, function(error, rows) {
            if (error) throw error;
            console.log("Read Data Success !");
            for (var i = 0; i < rows.length; i++) {
                response.push({
                    id: rows[i].id,
                    user: rows[i].user
                });
            }
            res.send({
                code: 200,
                message: "Read Data Success",
                data: response
            });
        });
    });
});

module.exports = router;
