const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cineSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    },{
        timestamps: true
    }
)

const Cine = mongoose.model('cine', cineSchema);

module.exports = Cine;