const express = require('express');
const router = express.Router();
var db = require('../app.js');

router.post('/', function (req, res) {
    mem_id = req.body.mem_id
    console.log(mem_id)
    db.query('SELECT * FROM member WHERE mem_id=?', [mem_id], function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result[0])
        }
    })
})


// 비밀번호 변경
router.post('/editPW', function (req, res) {
    mem_id = req.body.mem_id
    mem_pw = req.body.mem_pw
    console.log(mem_id, mem_pw)
    db.query('UPDATE member SET mem_pw=? WHERE mem_id=?;', [mem_pw, mem_id], function (err, result) {
        if (err) {
            console.log(err)
        } 
        })
})


// 회원 탈퇴
router.post('/resign', function (req, res) {
    mem_id = req.query.mem_id;
    mem_pw = req.body.mem_pw;

    db.query('SELECT mem_id FROM member WHERE mem_id=? AND mem_pw=?;', [mem_id, mem_pw], function (err, result) {
        if (err) {
            console.log(err)
        } else if (result.length <= 0) {
            res.send("<script>alert('비밀번호가 일치하지 않습니다.');location.href='/memInfo/resign';</script>")
        } else {
            db.query('DELETE FROM member WHERE mem_id=? AND mem_pw=?;', [mem_id, mem_pw], function (err, result) {
                if (err) {
                    console.log(err)
                } else  {
                    res.send("<script>alert('탈퇴되었습니다.');location.href='/';</script>")
                }
            })
        }
    })
})


// 개인정보 수정
router.post('/edit', function (req, res) {
    var mem_id = req.body.mem_id
    var mem_phone = req.body.mem_phone
    var mem_email = req.body.mem_email
    var mem_city = req.body.mem_city
    var mem_address = req.body.mem_address

    db.query('UPDATE member SET mem_phone=?, mem_email=?, mem_city=?, mem_address=? WHERE mem_id=?;',
        [mem_phone, mem_email, mem_city, mem_address, mem_id], function (err, result) {
            if (err) {
                console.log(err)
            } else {
                res.send("<script>alert('정보가 수정되었습니다.');location.href='/';</script>")
            }
        })
})


// 주소 검색 api 호출 및 결과 받아오기
router.post('/post-add', (req, res) => {
    res.locals = req.body;
    console.log(res.locals);
    res.render('post-add');
});


module.exports = router