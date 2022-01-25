// Import Packages
const express = require('express')
const app = require('../app')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
        res.send('This is the Results Page')
    })
    //
    // Export module
module.exports = router