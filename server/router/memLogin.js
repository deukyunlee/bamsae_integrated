var express = require('express');
var router = express.Router();
var db = require('../app.js');


// 로그인 페이지 출력
router.get('/', function (req, res) {
    res.send("hello, world")
})


// 회원 식별
router.post('/auth', function (req, res) {
    var mem_id = req.body.mem_id;
    var mem_pw = req.body.mem_pw;
    
    console.log(mem_id, mem_pw)
    db.query('SELECT * FROM member WHERE mem_id = ? AND mem_pw = ?', [mem_id, mem_pw], function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        // 로그인 정보가 일치하지 않을 때
        if (rows.length <= 0) {
            const result = {
                "mem_id": mem_id,
                "loggin": 0
            }
            res.send(result)
        }
        // 로그인 정보가 일치할 때
        else {
            const result = {
                "mem_id": mem_id,
                "loggin": 1
            }
            res.send(result)
        }
    })
})


router.get('/out', function (req, res) {
    req.session.destroy();
    res.redirect('/');
})


module.exports = router;