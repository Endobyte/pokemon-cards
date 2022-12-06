const {Card} = require('../models')
module.exports.viewCards = async function(req, res) {
    const cards = await Card.findAll();
    res.render('index', {cards});
}