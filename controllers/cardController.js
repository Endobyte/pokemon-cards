const {Card} = require('../models')
const types = ['none', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

module.exports.viewCards = async function(req, res) {
    let searchTypes = ['all'];
    for (let i = 0; i < types.length; i++) {
        searchTypes.push(types[i]);
    }
    let cards;
    let searchType = req.query.type || 'all';
    let searchRandom = req.query.random || false;
    if (searchType === 'all') {
        cards = await Card.findAll();
    } else {
        cards = await Card.findAll({
            where: {
                type: searchType
            }
        })
    }
    if (cards.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(cards.length);
        cards = [cards[randomIndex]];
    }
    res.render('index', {cards, types:searchTypes, searchType});
}

module.exports.renderEditForm = async function(req, res) {
    const card = await Card.findByPk(
        req.params.id
    );
    res.render('edit', {card, types})
}

module.exports.updateCard = async function(req, res) {
    await Card.update(
        {
            type: req.body.type,
            name: req.body.name,
            hp: req.body.hp,
            picture: req.body.picture,
            moveCostOne: req.body.moveCostOne,
            moveNameOne: req.body.moveNameOne,
            moveCostOneNum: req.body.moveCostOneNum,
            moveCostTwo: req.body.moveCostTwo,
            moveNameTwo: req.body.moveNameTwo,
            moveCostTwoNum: req.body.moveCostTwoNum,
            weaknessOne: checkNull(req.body.weaknessOne),
            weaknessTwo: checkNull(req.body.weaknessTwo),
            weaknessThree: checkNull(req.body.weaknessThree),
            resistanceOne: checkNull(req.body.resistanceOne),
            resistanceTwo: checkNull(req.body.resistanceTwo),
            resistanceThree: checkNull(req.body.resistanceThree),
            retreatCost: req.body.retreatCost
        },
                {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteCard = async function(req, res) {
    await Card.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.redirect('/');
}

module.exports.renderAddForm = async function(req, res) {
    const card = {
        type: "",
        name: "",
        hp: "",
        picture: "",
        moveCostOne: 1,
        moveNameOne: "",
        moveCostOneNum: "",
        moveCostTwo: 1,
        moveNameTwo: "",
        moveCostTwoNum: "",
        weaknessOne: "none",
        weaknessTwo: "none",
        weaknessThree: "none",
        resistanceOne: "none",
        resistanceTwo: "none",
        resistanceThree: "none",
        retreatCost: 1
    };
    res.render('add', {card, types});
}

module.exports.addCard = async function(req, res) {

    await Card.create(
        {
            type: req.body.type,
            name: req.body.name,
            hp: req.body.hp,
            picture: req.body.picture,
            moveCostOne: req.body.moveCostOne,
            moveNameOne: req.body.moveNameOne,
            moveCostOneNum: req.body.moveCostOneNum,
            moveCostTwo: req.body.moveCostTwo,
            moveNameTwo: req.body.moveNameTwo,
            moveCostTwoNum: req.body.moveCostTwoNum,
            weaknessOne: checkNull(req.body.weaknessOne),
            weaknessTwo: checkNull(req.body.weaknessTwo),
            weaknessThree: checkNull(req.body.weaknessThree),
            resistanceOne: checkNull(req.body.resistanceOne),
            resistanceTwo: checkNull(req.body.resistanceTwo),
            resistanceThree: checkNull(req.body.resistanceThree),
            retreatCost: req.body.retreatCost
        }
    )
    res.redirect('/');
}

function checkNull(input) {
    if (input == 'none') {
        return null;
    } else {
        return input
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}