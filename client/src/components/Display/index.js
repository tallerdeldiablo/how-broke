import React from 'react';
import FinancialOverview from '../Display2';
import DisplayBarsExpense from '../DisplayBarsExpense';

export default function Display() {
  return (
    <main>
      <FinancialOverview />
      <DisplayBarsExpense />
    </main>
  );
}
