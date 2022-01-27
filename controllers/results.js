// Import Packages
const express = require('express')
const app = require('../app')
const router = express.Router()
const Results = require('../models/results')

// Create POST controller


// const getResults = async(search) => {
//     // let results = await Results.find({ title: search })
//     let results = await Results.find({ title: search })
//     return results
// }

router.get('/', (req, res) => {
    res.render('results')
})

router.post('/', async(req, res) => {
    console.log("SEARCH", req.body.search)
    let results = await Results.find({})
        // try {
        //     // log the search string on terminal
        //     console.log("SEARCH", req.body.search)
        //         // filter the results
        //         // let results = data.filter(result => result.title.includes(req.body.search) || result.description.includes(req.body.search))
        //     let results = await Results.find({})
        //     console.log(results)
        //     res.render('results', {
        //         results
        //     })
        // } catch (err) {
        //     console.log(err)
        // }
})

// Export module
module.exports = router