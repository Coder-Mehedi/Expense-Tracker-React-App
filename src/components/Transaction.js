import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const Transaction = ({ transaction, transaction: { amount} }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '+'

    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            { transaction.text } <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
