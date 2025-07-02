const express = require('express')
const router = express.router()
const db = require('../../config/database.js')

router.get('/user/get', (req, res) => {
    console.log("[GET DB]")

    db
})