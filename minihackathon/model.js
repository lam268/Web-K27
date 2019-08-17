const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    player1: {
        name: {
            type: String,
            required: true,

        },
        score: {
            type: Number,
            default: 0,
        },
        sumofscore: {
            type: Number,
            default: 0,
        },
    },
    player2: {
        name: {
            type: String,
            required: true,

        },
        score: {
            type: Number,
            default: 0,
        },
        sumofscore: {
            type: Number,
            default: 0,
        },
    },
    player3: {
        name: {
            type: String,
            required: true,

        },
        score: {
            type: Number,
            default: 0,
        },
        sumofscore: {
            type: Number,
            default: 0,
        },
    },
    player4: {
        name: {
            type: String,
            required: true,

        },
        score: {
            type: Number,
            default: 0,
        },
        sumofscore: {
            type: Number,
            default: 0,
        },
    },
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;