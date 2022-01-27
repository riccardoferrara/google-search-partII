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
        let results = await Results.find({
            $or: [
                { title: { '$regex': req.body.search, '$options': 'i' } },
                { description: { '$regex': req.body.search, '$options': 'i' } },
            ]
        })

        res.render('results', {
            results
        })
    })
    // Export module
module.exports = router