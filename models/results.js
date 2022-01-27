const mongoose = require('mongoose')

// Create the results moodel
// module.exports = mongoose.model('results', {
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     url: {
//         type: String,
//         required: true
//     },
//     links: [{
//         title: String,
//         url: String
//     }]
// })

module.exports = mongoose.model('results', {
    title: String,
    description: String,
    url: String,
    links: [{
        title: String,
        url: String,
    }, ]
});