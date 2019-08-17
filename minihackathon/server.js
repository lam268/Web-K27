const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const QuestionModel = require('./model');

mongoose.connect('mongodb://localhost:8000/minihackathon', { useNewUrlParser: true }, (e) => {
    if (e) {
        console.log(e);
        process.exit();
    } else {
        console.log('Connect to mongodb sucess ...');

        // start app
        const app = express();

        // public folder
        app.use(express.static('public'));
        app.use(bodyParser.json());

        // method + address
        // get/post/put/delete
        app.get('/', (req, res) => {
            // index.html
            res.sendFile(path.resolve(__dirname, './index.html'));
        });

        app.post('/create-player', (req, res) => {
            const newQuestion = {
                content: req.body.questionContent,
            };

            QuestionModel.create(newQuestion, (error, data) => {
                if (error) {
                    res.status(500).json({
                        success: false,
                        message: error.message
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



    }
})