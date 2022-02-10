import React, { useEffect } from 'react';
import BudgetItem from '../BudgetItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_BUDGETS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_BUDGETS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
function BudgetList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_BUDGETS);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BUDGETS,
        budgets: data.budgets,
      });
      data.budgets.forEach((budget) => {
        idbPromise('budgets', 'put', budget);
      });
    } else if (!loading) {
      idbPromise('budgets', 'get').then((budgets) => {
        dispatch({
          type: UPDATE_BUDGETS,
          budgets: budgets,
        });
      });
    }
  }, [data, loading, dispatch]);
  function filterBudgets() {
    if (!currentCategory) {
      return state.budgets;
    }
    return state.budgets.filter(
      (budget) => budget.category._id === currentCategory
    );
  }
  return (
    <div className="my-2">
      <h2>Our Money:</h2>
      {state.budgets.length ? (
        <div className="flex-row">
          {filterBudgets().map((budget) => (
            <BudgetItem
              key={budget._id}
              _id={budget._id}
              image={budget.image}
              name={budget.name}
              amountofmoney={budget.amountofmoney}
              quantity={budget.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any budgets yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}
export default BudgetList;