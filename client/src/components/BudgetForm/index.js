import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BUDGET } from '../../utils/mutations';
import { QUERY_BUDGETS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const BudgetForm = () => {
  const [budgetText, setBudgetText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addBudget, { error }] = useMutation(ADD_BUDGET, {
    update(cache, { data: { addBudget } }) {
      try {
        const { budgets } = cache.readQuery({ query: QUERY_BUDGETS });

        cache.writeQuery({
          query: QUERY_BUDGETS,
          data: { budgets: [addBudget, ...budgets] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, budgets: [...me.budgets, addBudget] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBudget({
        variables: {
          budgetText,
          budgetAuthor: Auth.getProfile().data.username,
        },
      });

      setBudgetText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'budgetText' && value.length <= 280) {
      setBudgetText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="budgetText"
                placeholder="Here's a new budget..."
                value={budgetText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Budget
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
          You need to be logged in to share your budgets. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BudgetForm;
