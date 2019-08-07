const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/vote.html'));
});

app.get('/vote', (req, res) => {
    fs.readFile('data.json', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {
            const questions = JSON.parse(data);
            const randomIndex = Math.floor(Math.random() * questions.length);
            const question = questions[randomIndex];
            res.status(201).json({
                success: true,
                data: JSON.stringify({
                    questionContent: question.content,
                    like: question.like,
                    dislike: question.dislike,
                    questionId: question.id,
                }),
            });
        }
    });
});

app.get('/ask', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/ask.html'));
});

app.post('/create-question', (req, res) => {
    const newQuestion = {
        content: req.body.questionContent,
        like: 0,
        dislike: 0,
        id: new Date().getTime(),
    };

    fs.readFile('data.json', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {
            const questions = JSON.parse(data);
            questions.push(newQuestion);

            fs.writeFile('data.json', JSON.stringify(questions), (err) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: err.message,
                    });
                } else {
                    res.status(201).json({
                        success: true,
                        data: newQuestion,
                    });
                }
            });
        }
    });
});

app.get("/questions/:questionId", (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/question-detail.html'));
});

app.put("/vote/:questionId/:vote", (req, res) => {
    // params: thanh phan cua duong dan co the thay doi
    fs.readFile('data.json', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {
            const questionId = req.params.questionId;
            const vote = req.params.vote;
            const questions = JSON.parse(data);
            let found = 0;
            for (let question of questions) {
                if (question.id == questionId) {
                    found = 1;
                    question[vote]++;
                    fs.writeFile('data.json', JSON.stringify(questions), (err) => {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                message: err.message,
                            });
                        } else {
                            res.status(201).json({
                                success: true,
                            });
                        }
                    });
                    break;
                }
            }
            if (found == 0) {
                res.status(500).json({
                    success: false,
                    message: "Question does not exist",
                });
            }
        }
    });
});

app.get("/get-question-by-id/:questionId", (req, res) => {
    // params: thanh phan cua duong dan co the thay doi
    fs.readFile('data.json', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        } else {
            const questionId = req.params.questionId;
            const questions = JSON.parse(data);
            let found = 0;
            for (let question of questions) {
                if (question.id === questionId) {
                    found = 1;
                    sendData = JSON.stringify({
                        questionContent: question.content,
                        like: question.like,
                        dislike: question.dislike,
                    });
                    res.status(201).json({
                        success: true,
                        data: sendData,
                    });
                    break;
                }
            }
            if (found == 0) {
                res.status(500).json({
                    success: false,
                    message: "Question does not exist",
                });
            }
        }
    });
});

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server listen on port 3000...');
    }
});