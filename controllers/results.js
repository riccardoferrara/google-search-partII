// Import Packages
const express = require('express')
const app = require('../app')
const router = express.Router()



// Create POST controller
let results = [{
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

const filterResults = (results, string) => {
    let filteredResults = []
    console.log("looking for " +
        string)
    results.forEach(result => {
        console.log(result.title)
        if (result.title.includes(string)) {
            filteredResults.push(result)
        }
    });
    return filteredResults
}

router.post('/', (req, res) => {
        // log the search string on terminal
        console.log(req.body.search)
            // filter the results
        results = filterResults(results, req.body.search)
        console.log(results)
        res.render('results', {
            results
        })
    })
    //
    // Export module
module.exports = router