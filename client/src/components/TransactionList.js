import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../contexts/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const { getTransaction, transactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransaction()
        // eslint-disable-next-line
    }, [])
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                
            </ul>
        </div>
    )
}

export default TransactionList
