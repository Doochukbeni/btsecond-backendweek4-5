const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel.js');

router.post('/create',               
    function(req, res) {
        
        
        const document = {
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description,
            "category": req.body.category,
            "dateCreated": req.body.datecreated 
        }
        productModel
        .create(document)
        .then(
            function() {
                res.send("success !");
            }
        )
        .catch(
            function(dbError) {
                console.log('DB product create error', dbError)
            }
        );        
    }
);
module.exports = router;

