var express = require("express")
var router = express.Router()
var db = require("../app.js")

/* 모두 테스트 완료했고 동작하지만, update의 경우 db에 해당하는 id가 없더라도 업데이트가 됐다고 나옴 -> 수정필요*/

// 회사 수익 조회

router.get("/", function (req, res) {
  db.query(
    `select sales_date, SUM(sales_ticket), SUM(sales_product), SUM(sales_salary), SUM(sales_admin), SUM(sales_net) from sales natural join theater;`,
    function (err, data) {
      if (err) throw err
      else res.send({ status: true, length: data.length, data: data })
    }
  )
})

module.exports = router
