const express = require('express');
const app = express();
const router = express.Router();
const db = require('../app.js')

//극장 정보 조회
router.get('/', async (req, res) => {
    await db.query(`SELECT * FROM theater2;`, (err, data) => {
        if(data==undefined){
            res.send({ "status": false});
        }else{
            res.send({ "status": true, "length":data.length,"data": data });
        }
        
    });

        
});

//극장 상세 정보 조회
router.get('/tid', async (req, res) => {
    const theater_id = req.query.theater_id;
    await db.query('SELECT * from theater WHERE theater_id = ?',[theater_id], (err, data) => {
        if(data==undefined){
            res.send({ "status": false});
        }else{
            res.send({ "status": true, "data": data });
        }
        
    });
});


module.exports = router;