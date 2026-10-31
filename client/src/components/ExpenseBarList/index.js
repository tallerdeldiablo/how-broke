import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { getExpenseAmount, formatMoney } from '../../utils/expenseAmount';
import { UPDATE_EXPENSE_AMOUNT, REMOVE_EXPENSE } from '../../utils/mutations';
import './style.css';

const ExpenseItem = ({ expense, onUpdated }) => {
  const [editing, setEditing] = useState(false);
  const [amount, setAmount] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [updateAmount, { loading, error }] = useMutation(UPDATE_EXPENSE_AMOUNT);
  const [removeExpense, { loading: deleting, error: deleteError }] = useMutation(REMOVE_EXPENSE);
  const currentAmount = getExpenseAmount(expense);
  const hasChanges = expenseName.trim() !== expense.expenseValue || Number(amount) !== currentAmount;

  const save = async (event) => {
    event.preventDefault();
    if (!hasChanges || !expenseName.trim() || !Number.isFinite(Number(amount)) || Number(amount) <= 0) return;
    try {
      await updateAmount({ variables: { expenseId: expense._id, amount: Number(amount), expenseValue: expenseName.trim() } });
      await onUpdated();
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${expense.expenseValue}"? This cannot be undone.`)) return;
    try {
      await removeExpense({ variables: { expenseId: expense._id } });
      await onUpdated();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li className="expense-item">
      <span>{expense.expenseValue}</span>
      {editing ? (
        <form className="expense-edit" onSubmit={save}>
          <input aria-label="Expense name" type="text" value={expenseName}
            onChange={(event) => setExpenseName(event.target.value)} maxLength={280} required />
          <input aria-label={`Amount for ${expense.expenseValue}`} type="number" min="0.01" step="0.01"
            value={amount} onChange={(event) => setAmount(event.target.value)} required autoFocus />
          <button type="submit" disabled={loading || !hasChanges || !expenseName.trim() || !(Number(amount) > 0)}>{loading ? 'Saving...' : 'Save'}</button>
          <button type="button" onClick={() => setEditing(false)} disabled={loading}>Cancel</button>
          {error && <small role="alert">Couldn't save. Try again.</small>}
        </form>
      ) : (
        <div className="expense-item-actions">
          <strong>{currentAmount === null ? 'Amount pending' : formatMoney(currentAmount)}</strong>
          <button type="button" onClick={() => { setExpenseName(expense.expenseValue); setAmount(currentAmount == null ? '' : String(currentAmount)); setEditing(true); }}>
            Edit
          </button>
          <button type="button" className="expense-delete" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
          {deleteError && <small role="alert">Couldn't delete. Try again.</small>}
        </div>
      )}
    </li>
  );
};

const ExpenseBarList = ({ expenses = [], onUpdated }) => {
  if (!expenses.length) {
    return <p className="expense-empty">No expenses yet. Add your first one above.</p>;
  }

  return (
    <ul className="expense-items">
      {expenses.map((expense) => <ExpenseItem key={expense._id} expense={expense} onUpdated={onUpdated} />)}
    </ul>
  );
};

export default ExpenseBarList;
