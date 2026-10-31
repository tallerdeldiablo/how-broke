import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';
import './style.css';

const ExpenseForm = ({ onAdded }) => {
  const [expenseValue, setExpenseText] = useState('');
  const [amount, setAmount] = useState('');

  const [addExpense, { error, loading }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!expenseValue.trim() || !Number.isFinite(Number(amount)) || Number(amount) <= 0) return;

    try {
      await addExpense({
        variables: {
          expenseValue: expenseValue.trim(),
          amount: Number(amount),
          expenseAuthor: Auth.getProfile().data.username,
        },
      });

      setExpenseText('');
      setAmount('');
      if (onAdded) await onAdded();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 280) {
      setExpenseText(value);
    }
  };

  return (
    <div className="expense-entry">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="expense-value">Add an expense</label>
        <div className="expense-entry-row">
          <input id="expense-value" name="expenseValue" type="text"
            placeholder="e.g. Rent, groceries, internet" value={expenseValue}
            maxLength={280} required onChange={handleChange} />
          <input id="expense-amount" aria-label="Amount in dollars" type="number"
            placeholder="Amount ($)" min="0.01" step="0.01" required
            value={amount} onChange={(event) => setAmount(event.target.value)} />
          <button type="submit" disabled={!expenseValue.trim() || !(Number(amount) > 0) || loading || !Auth.loggedIn()}>
            {loading ? 'Adding...' : 'Add expense'}
          </button>
        </div>
        {error && <p role="alert" className="expense-error">{error.message}</p>}
      </form>
    </div>
  );
};

export default ExpenseForm;
