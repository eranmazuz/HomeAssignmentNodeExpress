const express = require('express');
const router = express.Router();
const elasticsearchService = require("../services/elasticsearchService");

router.post('/order', async (req, res) => {
    const order  = req.body;
    try {
        await elasticsearchService.indexDocument('orders', order);
        res.status(200).send('order indexed successfully');
    } catch (error) {
        res.status(500);
    }
});

module.exports = router;