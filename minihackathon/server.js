const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const GameModel = require('./public/model');

mongoose.connect('mongodb://localhost:27017/minihackathon', { useNewUrlParser: true }, (e) => {
    if (e) {
        console.log(e);
        process.exit();
    } else {
        console.log("connect to mongodb success");
        const app = express();
        app.use(express.static('public'));
        app.get('/', (req, res) => {
            res.sendFile(path.resolve(__dirname, './public/index.html'));
        });
        app.post('/newgames', (req, res) => {
            console.log(req.query);
            GamesModel.create(newGame, (error, data) => {
                if (error) {
                    res.status(500).json({
                        success: false,
                        message: error.message,
                    });
                } else {
                    res.status(201).json({
                        success: true,
                        data: {
                            ...data._doc,
                            id: data._doc._id,
                        },
                    });
                }
            });
        });

        app.get('/game/:gameid', (req, res) => {
            res.sendFile(path.resolve(__dirname, './public/create-player.html'));

        });
        app.listen(8080, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Server listen on port...');
            }
        });
    }
});