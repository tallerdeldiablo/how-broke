import React from 'react';
import { useQuery } from '@apollo/client';
import ExpenseBarList from '../ExpenseBarList';
import ExpenseForm from '../ExpenseForm';
import { QUERY_EXPENSES } from '../../utils/queries';
import Auth from '../../utils/auth';
import { getExpenseAmount, formatMoney } from '../../utils/expenseAmount';
import './style.css';

const DisplayBarsExpense = () => {
  const { loading, error, data, refetch } = useQuery(QUERY_EXPENSES, {
    variables: { username: Auth.getProfile().data.username },
  });
  const expenses = data?.expenses || [];
  const total = expenses.reduce((sum, expense) => sum + (getExpenseAmount(expense) || 0), 0);

  return (
    <section className="expense-panel" aria-labelledby="expenses-heading">
      <div className="expense-panel-heading">
        <h2 id="expenses-heading">Your expenses</h2>
        <span>{loading ? 'Loading...' : `${expenses.length} items · ${formatMoney(total)}`}</span>
      </div>
      <ExpenseForm onAdded={() => refetch()} />
      {loading ? <p>Loading expenses...</p> : error ? (
        <p role="alert">Couldn't load expenses. Please refresh the page.</p>
      ) : <ExpenseBarList expenses={expenses} />}
    </section>
  );
};

export default DisplayBarsExpense;
