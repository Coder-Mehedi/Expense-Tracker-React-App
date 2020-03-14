const Transaction = require('../models/Transaction')

// @desc Get all Transaction
// @route GET /api/v1/transactions
// @access Public

exports.getTrasactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find()
        return res.status(200).json({ success: true, length: transaction.length, data: transaction })
    } catch (error) {
        res.send(500).json({ success: false, error: 'Server Error'})
    }
}

// @desc Get all Transaction
// @route POST /api/v1/transactions
// @access Public

exports.addTrasaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)

        return res.status(201).json({success: true, data: transaction})
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message)
            return res.status(400).json({ success: false, error: messages})
        } else {
            res.send(500).json({ success: false, error: 'Server Error'})
        }
    }
}

// @desc Get all Transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTrasaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)

        if(!transaction) return res.status(404).json({ success: false, error: 'No Transaction Found'})

        await transaction.remove()

        res.status(200).json({ success: true, data: {}})
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error'})
    }
}