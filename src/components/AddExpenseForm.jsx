import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {
  const { dispatch} = useContext(AppContext);
  
 const [name, setName] = useState('');
 const [cost, setCost] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();

    const transactionList = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({type: 'ADD_TRANSACTION', payload: transactionList,});
 }

  return (
    <div className='addExpenseForm'>
        <h2 style={{textAlign:'center', marginBottom:'10px'}}>Add New Expenditure</h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='Enter Expense Name ...' value={name} onChange={(e)=> setName(e.target.value)}/>
            <label className='costLabel' style={{marginLeft:'20px'}}>Cost</label>
            <input type='text' placeholder='Enter cost ...'  value={cost} onChange={(e)=> setCost(e.target.value)}/>
          <button className='addBtn' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddExpenseForm