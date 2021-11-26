const express = require('express');
const router = express.Router();
var db = require('../app.js');


// 비밀번호 확인
router.post('/check', function (req, res) {
    mem_id = req.query.mem_id;
    mem_pw = req.body.mem_pw;

    db.query('SELECT mem_id FROM member WHERE mem_id=? AND mem_pw=?;', [mem_id, mem_pw], function (err, result) {
        if (err) {
            console.log(err)
        } else if (result.length <= 0) {
            res.send("<script>alert('비밀번호가 일치하지 않습니다.');location.href='/memInfo/check';</script>")
        } else {
            res.redirect('/memInfo');
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


router.get('/', function (req, res) {
    res.send('개인정보 수정 페이지');
})


// 개인정보 수정
router.post('/', function (req, res) {
    var mem_id = req.query.mem_id;
    var mem_name = req.sanitize('mem_name').escape()
    var mem_phone = req.sanitize('mem_phone').escape()
    var mem_email = req.sanitize('email_id').escape() + '@' + req.sanitize('email_domain').escape()
    var mem_birth = req.sanitize('mem_birth').escape()
    var mem_gender = req.sanitize('mem_gender').escape()
    var mem_city = req.sanitize('roadAddrPart1').escape()
    var mem_address = req.sanitize('addrDetail').escape()

    db.query('UPDATE member SET mem_name=?, mem_phone=?, mem_email=?, mem_birth=?, mem_gender=?, mem_city=?, mem_address=? WHERE mem_id=?;',
        [mem_name, mem_phone, mem_email, mem_birth, mem_gender, mem_city, mem_address, mem_id], function (err, result) {
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