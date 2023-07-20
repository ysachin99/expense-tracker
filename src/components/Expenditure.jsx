import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Expenditure = () => {
  const { transactionList } = useContext(AppContext);

  const totalExpenditure = transactionList.reduce((total, item)=> {
    return (total += item.cost);
  }, 0)

  return (
    <div className='expenditure'>
        <h3>Expenditure</h3>
        <h1>-₹{totalExpenditure}</h1>
    </div>
  )
}

export default Expenditure