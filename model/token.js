/**
 * Created by brianaamodt on 5/19/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TokenSchema = new Schema({
    name: String,
    class: String,
    power: Number,
    toughness: Number,
    ability: String
});

module.exports = mongoose.model('Token', TokenSchema);