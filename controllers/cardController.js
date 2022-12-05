module.exports.viewCards = function(req, res) {
    const cards = [{
        id: 1,
        type: 'electric',
        name: 'Pikachu',
        hp: 50,
        typeIcon: '/images/electric.png',
        picture: 'https://vignette.wikia.nocookie.net/wii/images/7/77/Pikachu_SSB4.jpg/revision/latest?cb=20140210000421',
        moveCostOne: 1,
        moveNameOne: 'Gnaw',
        moveCostOneNum: 10,
        moveCostTwo: 2,
        moveNameTwo: 'Lightning Bolt',
        moveCostTwoNum: 50,
        weaknessOne: '/images/ground.png',
        weaknessTwo: '',
        weaknessThree: '',
        resistanceOne: '/images/flying.png',
        resistanceTwo: '/images/steel.png',
        resistanceThree: '/images/electric.png',
        retreatCost: 2
    }, {
        id: 2,
        type: 'electric',
        name: 'Pikachu',
        hp: 70,
        typeIcon: '/images/electric.png',
        picture: 'https://vignette.wikia.nocookie.net/wii/images/7/77/Pikachu_SSB4.jpg/revision/latest?cb=20140210000421',
        moveCostOne: 1,
        moveNameOne: 'Quick Attack',
        moveCostOneNum: 10,
        moveCostTwo: 2,
        moveNameTwo: 'Electro Ball',
        moveCostTwoNum: 60,
        weaknessOne: '/images/ground.png',
        weaknessTwo: '',
        weaknessThree: '',
        resistanceOne: '/images/flying.png',
        resistanceTwo: '/images/steel.png',
        resistanceThree: '/images/electric.png',
        retreatCost: 1
    }];
    res.render('index', {cards});
}