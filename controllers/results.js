// Import Packages
const express = require('express')
const app = require('../app')
const router = express.Router()



// Create POST controller
results = [{
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [{
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
    }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
    }]
}, {
    title: 'JS tutorials 2 test',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [{
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
    }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
    }]
}, {
    title: 'JS tutorials 3 test',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [{
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
    }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
    }]
}]


router.post('/', (req, res) => {
        console.log(req.body.search)
        res.render('results', {
            results
        })
    })
    //
    // Export module
module.exports = router