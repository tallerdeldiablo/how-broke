import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AmountList from '../components/AmountList';
import AmountForm from '../components/AmountForm';

import { QUERY_SINGLE_Expense } from '../utils/queries';
console.log("QQ",QUERY_SINGLE_Expense )

const SingleExpense = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { expenseId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_Expense, {
    // pass URL parameter
    variables: { expenseId: expenseId },
  });
  console.log("load",loading)
  console.log("data",data)

  const expense = data?.expense || {};
  console.log("THIS IS ", expense)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {expense.expenseAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this expense on {expense.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {expense.expenseValue}
        </blockquote>
      </div>

      <div className="my-5">
        <AmountList amounts={expense.amounts} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <AmountForm expenseId={expense._id} />
      </div>
    </div>
  );
};

export default SingleExpense;
