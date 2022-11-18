import React from 'react'
import './ExpenseItems.css'

const ExpenseItems = () => {
  return (
    <div className='expense-item'>
        <div>March 28th 2012</div>
        <div className='expense-item_description'>
            <h2>Car</h2>
            <p className='expense-item_price'>342423</p>
        </div>
    </div>
  )
}

export default ExpenseItems