import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const { transactionList, balance } = useContext(AppContext);

  const totalExpenses = transactionList.reduce((total, item)=> {
    return (total = total + item.cost);
  }, 0)

  return (
    <div className='remaining'>
        <h3>Remaining</h3>
        <h1>₹{balance - totalExpenses}</h1>

    </div>
  )
}

export default Remaining