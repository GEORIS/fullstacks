const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    torre: Number,
    piso: Number,
    apto: Number,
    tipo: String,
    ac: Number,
    balcon: Number,
    ac_balcon: Number,
    apriv: Number,
    disponibilidad: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks',TaskSchema)