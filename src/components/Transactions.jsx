import React, { useContext } from 'react'
import TransactionItem from './TransactionItem'
import { AppContext } from '../context/AppContext'

const Transactions = () => {
  const { transactionList} = useContext(AppContext);


  return (
    <div className='transactions'>
      <h2 style={{textAlign:'center', margin:'10px 0'}}>Transactions</h2>
      <ul>
        {transactionList.map((transaction)=>(
          <TransactionItem id={transaction.id} name={transaction.name} cost={transaction.cost}/>
        ))}
      </ul>

    </div>
  )
}

export default Transactions