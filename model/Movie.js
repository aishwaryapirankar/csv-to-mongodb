const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: 'string',
    releaseDate: 'number',
    rating: 'number',
    genre: 'string'
});

const model = mongoose.model('Movie', schema);

module.exports = model;