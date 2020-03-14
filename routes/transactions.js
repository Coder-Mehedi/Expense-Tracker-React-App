const express = require('express')
const router = express.Router()
const { getTrasactions, addTrasaction, deleteTrasaction } = require('../controllers/transactions')

router
    .route('/')
    .get(getTrasactions)
    .post(addTrasaction)

router
    .route('/:id')
    .delete(deleteTrasaction)

module.exports = router