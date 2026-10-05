const mongoose = require('mongoose');

const towerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    description: {
        type: String,
        required: false,
    },
    placement_cost: {
        type: Number,
        required: true,
        min: [0, 'placement cost must be a positive number'],
    }
})

module.exports = mongoose.model('Tower', towerSchema)