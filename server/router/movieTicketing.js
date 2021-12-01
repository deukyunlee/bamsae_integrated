var express = require("express")
var router = express.Router()
var db = require("../app.js")

//전체조회
router.get("/", (req, res) => {
  var reqQuery = req.query
  var selectData = [reqQuery.movie_title]
  db.query(
    `select movie_title, screen_beg, screen_fin from movie natural join schedule;`,
    selectData,
    function (err, rows) {
      if (err) throw err
      else res.send(rows)
    }
  )
})

//영화제목으로 조회
router.get("/title", (req, res) => {
  var reqQuery = req.query
  var selectData = [reqQuery.movie_title]
  db.query(
    `select movie_title, screen_beg, screen_fin from movie natural join schedule where movie_title = ?;`,
    selectData,
    function (err, rows) {
      if (err) throw err
      else res.send(rows)
    }
  )
})

router.get("/location", (req, res) => {
  var reqQuery = req.query
  var selectData = [reqQuery.sched_id]
  db.query(
    `select theater_name, theater_loc, theater_info from theater natural join auditorium natural join schedule where sched_id= ?;`,
    selectData,
    function (err, rows) {
      if (err) throw err
      else res.send(rows)
    }
  )
})
module.exports = router
