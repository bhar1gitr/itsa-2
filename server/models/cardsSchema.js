const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      }
});

const Cards = mongoose.model('test', cardsSchema);
module.exports = Cards;