var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', cardController.viewCards);

module.exports = router;
