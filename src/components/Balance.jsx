import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Balance = () => {
  const { balance } = useContext(AppContext);
  return (
    <div className='balance'>
        <h3>Balance</h3>
        <h1>₹{balance}</h1>
    </div>
  )
}

export default Balance