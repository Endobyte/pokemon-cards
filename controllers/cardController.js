module.exports.viewCards = function(req, res) {
    const card = {
        id: 1,
        type: 'electric',
        name: 'Pikachu',
        hp: 50,
        typeIcon: '/images/electric.png',
        picture: 'https://vignette.wikia.nocookie.net/wii/images/7/77/Pikachu_SSB4.jpg/revision/latest?cb=20140210000421',
        moveCostOne: 1,
        moveNameOne: 'Gnaw',
        moveCostOneNum: 10
    //    TODO finish variable values for card
    }
    res.render('index');
}