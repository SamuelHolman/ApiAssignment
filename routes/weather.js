var express = require('express');
var router = express.Router();
const WeatherController = require("../controllers/WeatherController");

/* GET users listing. */
router.get('/', WeatherController.get_weather());

module.exports = router;