const mongoose = require('mongoose')

const Universities = mongoose.model('Universities', {


    id_Universidade: Number,
    nameUniversidade: String,
    countryUniversidade: String,
    stateUniversidade: String,
    
})

module.exports = Universities

