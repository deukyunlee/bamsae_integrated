var express = require('express');
var router = express.Router();
var db = require('../app.js');
var moment = require('moment');


// 회원 전체 공지사항/이벤트 조회
router.get('/all', function (req, res) {
    db.query('SELECT * FROM notice_board', function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            for (i = 0; i < rows.length; i++) {
                rows[i].posted_date = moment(rows.posted_date).format('YYYY-MM-DD')
            }
            res.send(rows);
        }
    })
})


// 회원 극장별 공지사항/이벤트 조회
router.get('/theater', function (req, res) {
    var theater_id = req.query.theater_id;
    db.query('SELECT * FROM notice_board WHERE theater_id=?', [theater_id], function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
})


module.exports = router;