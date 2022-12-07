const {Card} = require('../models')
const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

module.exports.viewCards = async function(req, res) {
    const cards = await Card.findAll();
    res.render('index', {cards});
}

module.exports.renderEditForm = async function(req, res) {
    const card = await Card.findByPk(
        req.params.id
    );
    res.render('edit', {card, types})
}

// TODO continue on slide 28