import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const Chart = () => {
  const [state, dispatch] = useStoreContext();

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.amountofmoney * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }
  function submitCheckout() {
    const productIds = [];
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { budgets: productIds },
    });
  }
  if (!state.cartOpen) {
    return (
      <div>
        statcartnot open
        <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Your-Budget</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            :scream:
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div> 
      
      </div>
    );
  }
  return (
    <div>
    statcar open
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Your-Budget</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            :scream:
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div> 
    </div>
  );
};
export default Chart;