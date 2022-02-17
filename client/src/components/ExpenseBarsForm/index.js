import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';
import { QUERY_EXPENSES } from '../../utils/queries';

import Auth from '../../utils/auth';
import './style.css';

const ExpenseForm = () => {
  const [expenseValue, setExpenseText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addExpense, { error }] = useMutation(ADD_EXPENSE, {
    update(cache, { data: { addExpense } }) {
      try {
        const { expenses } = cache.readQuery({ query: QUERY_EXPENSES });

        cache.writeQuery({
          query: QUERY_EXPENSES,
          data: { expenses: [addExpense, ...expenses] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          expenseValue,
          expenseAuthor: Auth.getProfile().data.username,
        },
      });

      setExpenseText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'expenseValue' && value.length <= 280) {
      setExpenseText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div id="expense-form">
      <h3 className="ExpenseInput">ADD A NEW EXPENSE</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
      
          </p>
          <form
            className="form"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="expenseValue"
                placeholder="Add a new expense..."
                value={expenseValue}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
         
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Expense
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your expenses. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ExpenseForm;
