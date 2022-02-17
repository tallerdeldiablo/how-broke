import React from "react";
import { useQuery } from '@apollo/client';

import ExpenseBarsList from '../ExpenseBarList';
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
          // style={{ border: '1px dotted #1a1a1a' }}
        >
       
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ExpenseBarsList
              expenses={expenses}
              title=""
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default DisplayExpense;
