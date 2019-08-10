const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,

    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    },
});

const QuestionModel = mongoose.model('Question', QuestSchema);

module.exports = QuestionModel;