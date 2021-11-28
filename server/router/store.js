const express = require('express');
const app = express();
const router = express.Router();
const db = require('../app.js')

//스토어 목록 카테고리 별로 조회
router.get('/', async (req, res) => {
    var product_type = req.query.product_type;
    console.log(product_type);
    
    if(product_type==='best'){//best가 기본 제일 먼저 나오는 탭이라고 가정
        await db.query(`(SELECT * FROM PRODUCT WHERE PRODUCT_TYPE = '1' limit 3)
                    union (SELECT * FROM PRODUCT WHERE PRODUCT_TYPE = '2' limit 3)
                    union (SELECT * FROM PRODUCT WHERE PRODUCT_TYPE = '3' limit 3);`, (err, data) => {
            if(data.length<=0){
                res.send({ "status": false, "length": data.length});
            }else{
                res.send({ "status": true, "length": data.length, "data": data });
            }
            
        });
    }else{
        await db.query('SELECT * FROM PRODUCT WHERE PRODUCT_TYPE = ?', [product_type], (err, data) => {
            if(data.length<=0){
                res.send({ "status": false, "length": data.length});
            }else{
                res.send({ "status": true, "length": data.length, "data": data });
            }
            
        });
    }
});

//스토어 제품 상세보기
router.get('/pid', async (req, res) => {
    const product_id = req.query.product_id;

    await db.query('SELECT * FROM PRODUCT WHERE product_id = ?',[product_id], (err, data) => {
        if(data.length<=0){
            res.send({ "status": false});
        }else{
            res.send({ "status": true, "data": data });
        }
        
    });
});


module.exports = router;