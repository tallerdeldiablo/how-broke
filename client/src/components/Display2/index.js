import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_ME, QUERY_EXPENSES } from '../../utils/queries';
import { UPDATE_MONTHLY_INCOME, UPDATE_MONTHLY_SAVINGS } from '../../utils/mutations';
import { formatMoney, getExpenseAmount } from '../../utils/expenseAmount';
import './style.css';

export default function Display2() {
  const [income, setIncome] = useState('');
  const [saved, setSaved] = useState(false);
  const [savings, setSavings] = useState('');
  const [savingsSaved, setSavingsSaved] = useState(false);
  const { data, loading, error: queryError } = useQuery(QUERY_ME);
  const { data: expensesData, loading: expensesLoading, error: expensesError } = useQuery(QUERY_EXPENSES, {
    variables: { username: Auth.getProfile().data.username },
  });
  const [updateIncome, { loading: saving, error: saveError }] = useMutation(UPDATE_MONTHLY_INCOME);
  const [updateSavings, { loading: savingSavings, error: savingsError }] = useMutation(UPDATE_MONTHLY_SAVINGS);
  const currentIncome = data?.me?.monthlyIncome;
  const currentSavings = data?.me?.monthlySavings;
  const expenseTotal = (expensesData?.expenses || []).reduce(
    (sum, expense) => sum + (getExpenseAmount(expense) || 0), 0
  );
  const balance = currentIncome == null ? null : currentIncome - expenseTotal - (currentSavings || 0);
  const mood = balance == null ? null : balance < 0 ? { emoji: 'X.X', label: 'In the red', level: 'red' }
    : balance <= currentIncome * 0.2 ? { emoji: '0.o', label: 'Running low', level: 'low' }
      : { emoji: ':)', label: 'Looking good', level: 'good' };

  useEffect(() => {
    if (currentIncome != null) setIncome(String(currentIncome));
  }, [currentIncome]);

  useEffect(() => {
    if (currentSavings != null) setSavings(String(currentSavings));
  }, [currentSavings]);

  const handleSave = async (event) => {
    event.preventDefault();
    if (income === '' || !Number.isFinite(Number(income)) || Number(income) < 0) return;
    setSaved(false);
    try {
      await updateIncome({ variables: { monthlyIncome: Number(income) } });
      setSaved(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSavingsSave = async (event) => {
    event.preventDefault();
    if (savings === '' || !Number.isFinite(Number(savings)) || Number(savings) < 0) return;
    setSavingsSaved(false);
    try {
      await updateSavings({ variables: { monthlySavings: Number(savings) } });
      setSavingsSaved(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="overview-container">
      <p>Hello, {Auth.getProfile().data.username}</p>
      <h1>Financial Overview</h1>
      <div className="income-card">
        <div>
          <h2>Monthly income</h2>
          <p>{loading ? 'Loading...' : currentIncome == null ? 'Add your expected income each month.' : formatMoney(currentIncome)}</p>
        </div>
        <form className="income-form" onSubmit={handleSave}>
          <label htmlFor="monthly-income">Amount per month ($)</label>
          <div>
            <input id="monthly-income" type="number" min="0" step="0.01" required
              value={income} onChange={(event) => { setIncome(event.target.value); setSaved(false); }}
              placeholder="e.g. 2500" disabled={loading || saving} />
            <button type="submit" disabled={loading || saving || income === ''}>
              {saving ? 'Saving...' : 'Save income'}
            </button>
          </div>
          {saved && <small role="status">Saved</small>}
          {(queryError || saveError) && <small role="alert">Couldn't save your income. Please try again.</small>}
        </form>
      </div>
      <div className="income-card">
        <div>
          <h2>Monthly savings goal</h2>
          <p>{loading ? 'Loading...' : currentSavings == null ? 'Set aside money every month.' : formatMoney(currentSavings)}</p>
        </div>
        <form className="income-form" onSubmit={handleSavingsSave}>
          <label htmlFor="monthly-savings">Amount per month ($)</label>
          <div>
            <input id="monthly-savings" type="number" min="0" step="0.01" required
              value={savings} onChange={(event) => { setSavings(event.target.value); setSavingsSaved(false); }}
              placeholder="e.g. 200" disabled={loading || savingSavings} />
            <button type="submit" disabled={loading || savingSavings || savings === ''}>
              {savingSavings ? 'Saving...' : 'Save savings'}
            </button>
          </div>
          {savingsSaved && <small role="status">Saved</small>}
          {(queryError || savingsError) && <small role="alert">Couldn't save your savings. Please try again.</small>}
        </form>
      </div>
      <div className="balance-card" aria-live="polite">
        <div>
          <h2>Monthly balance</h2>
          <p>{loading || expensesLoading ? 'Loading...' : expensesError ? 'Could not calculate the balance.'
            : balance == null ? 'Add your income to see your balance.' : formatMoney(balance)}</p>
          {balance != null && !loading && !expensesLoading && !expensesError && <small>Income {formatMoney(currentIncome)} − expenses {formatMoney(expenseTotal)} − savings goal {formatMoney(currentSavings || 0)}</small>}
          <small className="balance-note">Estimate using your listed monthly expenses.</small>
        </div>
        {/* TODO: Replace emojis with images. */}
        <div className={`broke-level ${mood && !loading && !expensesLoading && !expensesError ? mood.level : ''}`} aria-label={mood && !loading && !expensesLoading && !expensesError ? `Broke level: ${mood.label}` : 'Broke level pending'}>
          <span aria-hidden="true">{mood && !loading && !expensesLoading && !expensesError ? mood.emoji : '—'}</span>
          <small>{mood && !loading && !expensesLoading && !expensesError ? mood.label : 'Broke level'}</small>
        </div>
      </div>
    </header>
  );
}
