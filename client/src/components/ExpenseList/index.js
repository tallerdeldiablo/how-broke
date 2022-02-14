import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseList = ({ expenses, title }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {expenses &&
        expenses.map((expense) => (
          <div key={expense._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {expense.expenseAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                       </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{expense.expenseValue}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${expense._id}`}
            >
            💰
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ExpenseList;
