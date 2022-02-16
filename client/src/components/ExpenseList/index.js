import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ExpenseList = ({ expenses, title }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  return (
    <div id="expense-list">
      <h3>{title}</h3>
      {expenses &&
        expenses.map((expense) => (
          <div key={expense._id} className="card">
            <h4 className="card-header">
              <span style={{ fontSize: '1rem' }}>
                       </span>
            </h4>
            <div className="card-b">
              <p>{expense.expenseValue}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/expenses/${expense._id}`}
            >
              <img src="https://img.icons8.com/color-glass/25/000000/enter-2.png"/>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ExpenseList;
