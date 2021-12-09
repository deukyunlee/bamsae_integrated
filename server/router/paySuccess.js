var express = require("express")
var router = express.Router()
var db = require("../app.js")
const url = require("url")
const { query } = require("express")

/* 카카오페이 결제에 성공한 경우*/
router.get("/", function (req, res) {
  const queryData = url.parse(req.url, true).query
  // console.log(queryData.pg_token)
  // console.log(queryData.item_name)
  // console.log(queryData.quantity)
  // console.log("success")
  const totalPrice = queryData.price
  // const point = console.log(totalPrice)
  if (totalPrice > 20000) {
    var sql = `UPDATE member SET mem_point = mem_point + ${totalPrice}*0.05, mem_coupon = mem_coupon +1 where mem_id = '${queryData.mem_id}';`
  } else var sql = `UPDATE member SET mem_point = mem_point + ${totalPrice}*0.05 where mem_id = '${queryData.mem_id}';`
  db.query(sql, async function (err, rows, fields) {
    if (err) throw err

    db.query(`SELECT mem_point from member where mem_id = ${queryData.mem_id};`, (err, rows, fields) =>
      res.send(fields)
    ),
      res.send(
        `${totalPrice * 0.05}만큼 포인트가 적립되었습니다. <script>alert(${
          totalPrice * 0.05
        }+'포인트 적립 및 4000원 할인 쿠폰이 발급되었습니다.');window.opener.location.href="http://localhost:3000";window.close();
        </script>`
      )
    // await res.redirect("/movieHistory")
  })
})

router.get("/coupon", async (req, res) => {
  // const queryData = url.parse(req.url, true).query
  const mem_id = req.query.mem_id
  await db.query(`SELECT mem_coupon from member where mem_id = '${mem_id}';`, (err, data) => {
    if (data.length <= 0) {
      res.send({ status: false, length: data.length })
    } else {
      res.send({ data: JSON.stringify(data[0].mem_coupon) })
    }
  })
})
module.exports = router
