import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { UPDATE_MONTHLY_INCOME } from '../../utils/mutations';
import { formatMoney } from '../../utils/expenseAmount';
import './style.css';

export default function Display2() {
  const [income, setIncome] = useState('');
  const [saved, setSaved] = useState(false);
  const { data, loading, error: queryError } = useQuery(QUERY_ME);
  const [updateIncome, { loading: saving, error: saveError }] = useMutation(UPDATE_MONTHLY_INCOME);
  const currentIncome = data?.me?.monthlyIncome;

  useEffect(() => {
    if (currentIncome != null) setIncome(String(currentIncome));
  }, [currentIncome]);

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
    </header>
  );
}
