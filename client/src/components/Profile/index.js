import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_BUDGETS } from '../../utils/queries';
// import BudgetList from '../BudgetList';
// import BudgetForm from '../BudgetForm';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_BUDGETS);
    const budgets = data?.budgets || [];
  
    return (
     <>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <BudgetForm />
          </div>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <BudgetList
                budgets={budgets}
                title="Some Feed for Budget(s)..."
              />
            )}
          </div>
        </div>
        </>
    );
  };
export default Profile;
