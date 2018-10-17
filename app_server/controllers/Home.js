/* GET home page */

const homelist = function(req, res){
    res.render('index', { title: 'Home' });
};

//const Reservations = function(req, res){
   // res.render('index', { title: 'Reservations' });
//};


module.exports = { 
homelist
//Reservations
};
