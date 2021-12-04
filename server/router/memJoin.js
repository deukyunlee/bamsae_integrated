const express = require('express');
const router = express.Router();
var db = require('../app.js');


// 회원가입 처리
router.post('/', function (req, res) {
    const mem_id = req.body.id
    const mem_pw = req.body.password
    const mem_name = req.body.name
    const mem_email = req.body.email
    const mem_phone = req.body.phone
    const mem_city = req.body.add1
    const mem_address = req.body.add2
    const mem_birth = req.body.birth

    db.query('INSERT INTO member VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now());',
        [mem_id, mem_pw, 1, mem_name, mem_phone, mem_email, mem_birth, 0, mem_city, mem_address, 0], function (err, result) {
            if (err) {
                console.log(err)
            } 
    })
})


// 주소 검색 팝업창 출력
router.get('/post-add', (req, res) => {
    res.render('post-add');
});


// 주소 검색 api 호출 및 결과 받아오기
router.post('/post-add', (req, res) => {
    res.locals = req.body;
    console.log(res.locals);
    res.render('post-add');
});


// 아이디 유효성 확인
router.post('/idCheck', (req, res) => {
    var response = { 'result': idCheck(req.body.mem_id), 'mem_id': req.body.mem_id };
    res.json(response)
});


// 비밀번호 유효성 확인
router.post('/pwCheck', (req, res) => {
    var response = { 'result': pwCheck(req.body.mem_pw), 'mem_pw': req.body.mem_pw };
    res.json(response);
})


// (함수) 아이디 유효성 확인
var spc = new RegExp(/[~!@#$%^&* ()_ +|<>?:{}]/); // 특수문자
var kor = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/); // 한글
var eng = new RegExp(/^[a-zA-Z]*$/); // 영어
var num = new RegExp(/^[0-9]*$/); // 숫자

function idCheck(id) {
    console.log(id)
    // 5~15자 확인
    if (id.length > 15 || id.length < 5) return 1

    // 영문, 숫자 조합 확인
    if (spc.test(id) || kor.test(id)) return 2;

    // 중복 확인
    db.query('SELECT FROM member WHERE mem_id = ?', id, function (err, result) {
        if (!err) {
            response = { 'result': 'ok', 'mem_id': req.body.mem_id };
        }
        else return 3;
    })

    return 0;
}


// (함수) 비밀번호 유효성 확인
function pwCheck(pw) {
    // 8~16자 확인
    if (pw.length > 16 || pw.length < 8) return 1

    // 영문, 숫자, 특수문자 조합 확인
    if (spc.test(pw) && !kor.test(pw) && eng.test(pw), num.test(pw)) return 2;

    return 0;
}


module.exports = router