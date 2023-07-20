import React, { useContext } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { AppContext } from '../context/AppContext'

const TransactionItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: props.id,
    });
  };

  return (
      <li className='transactionItem' key={props.id}>
      <b> {props.name}</b>
       <div>
        <span>₹{props.cost}</span>
        <AiFillDelete className='deleteIcon' onClick={handleDelete}/>
       </div>
      </li>
  )
}

export default TransactionItem