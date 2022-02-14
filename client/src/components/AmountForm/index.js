import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_AMOUNT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const AmountForm = ({ expenseId }) => {
  const [amountValue, setAmountValue] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addAmount, { error }] = useMutation(ADD_AMOUNT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAmount({
        variables: {
          expenseId,
          amountValue,
          amountAuthor: Auth.getProfile().data.username,
        },
      });

      setAmountValue('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'amountValue' && value.length <= 280) {
      setAmountValue(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your expenses on this expense?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
        
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="amountValue"
                placeholder="Add your amount..."
                value={amountValue}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Amount
              </button>
            </div>
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

export default AmountForm;
