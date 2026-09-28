import React from 'react';
import { getExpenseAmount, formatMoney } from '../../utils/expenseAmount';
import './style.css';

const ExpenseBarList = ({ expenses = [] }) => {
  if (!expenses.length) {
    return <p className="expense-empty">No expenses yet. Add your first one above.</p>;
  }

  return (
    <ul className="expense-items">
      {expenses.map((expense) => (
        <li className="expense-item" key={expense._id}>
          <span>{expense.expenseValue}</span>
          <strong>{getExpenseAmount(expense) === null ? 'Amount pending' : formatMoney(getExpenseAmount(expense))}</strong>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseBarList;
