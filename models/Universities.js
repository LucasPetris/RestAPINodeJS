const mongoose = require('mongoose')

const Universities = mongoose.model('Universities', {
    id_Universities: Number,
    name_Universities: String,
    country: String,
    state: String,
    alpha_two_code: String,
    web_pages: String,
    domains: String
    
})

module.exports = Universities

