var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/Home'); 
const ctrlReservations = require('../controllers/Reservations');
/* GET home page. */
router.get('/', ctrlHome.homelist);
/* Get Reservations Page */
router.get('/Reservations', ctrlReservations.Reservations);

module.exports = router;

