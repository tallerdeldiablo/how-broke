import React from "react";
import { useQuery } from '@apollo/client';

import ExpenseList from '../ExpenseList';
import ExpenseForm from '../ExpenseForm';
import { QUERY_EXPENSES } from '../../utils/queries';
import './style.css';




const DisplayExpense = () => {
  const { loading, data } = useQuery(QUERY_EXPENSES);
  const expenses = data?.expenses || [];

  return (
    <main>
      <div className="Expenseform">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ExpenseForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExpenseList
              expenses={expenses}
              title="Expenses Category"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default DisplayExpense;
