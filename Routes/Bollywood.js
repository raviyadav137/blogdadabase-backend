const express = require('express');
const bollywoodApi = require('../Api/Bollywood');

const router = express.Router();
// router.post('/bolly', bollywoodApi.bollywoodDataInsertToDb);
router.get('/bolly', bollywoodApi.bollywoodDataFindFromDb);

module.exports = router;