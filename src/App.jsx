import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Expenditure from './components/Expenditure'
import Transactions from './components/Transactions'
import Remaining from './components/Remaining'
import Search from './components/Search'
import AddExpenseForm from './components/AddExpenseForm'

const App = () => {
  return (
    <div className='App'>
       <Header/>
       <div className='wrapper'>
       <div className='container1'>
      <Balance/>
      <Expenditure/>
      <Remaining/>
      </div>
      <div className='container2'>
        <Search/>
        <Transactions/>
        <AddExpenseForm/>
      </div>
       </div>
      
     
      

    </div>
  )
}

export default App