const express = require('express');

const db = require('../data/dbHelpers.js';

const router = expresss.Router();


router.get('/home', async (req, res) => {
    try {
        const reviews = await.db.getAllReviews(req.query)
        res.status(200).json(reviews);
    } catch(error) {
        res.status(404).json({ message: 'Error reaching reviews reload'})
    }
})