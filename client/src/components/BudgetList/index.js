import React from 'react';
import { Link } from 'react-router-dom';

const BudgetList = ({
  budgets,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!budgets.length) {
    return <h3>No Budgets Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {budgets &&
        budgets.map((budget) => (
          <div key={budget._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${budget.budgetAuthor}`}
                >
                  {budget.budgetAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this budget on {budget.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this budget on {budget.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{budget.budgetText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/budgets/${budget._id}`}
            >
              Join the discussion on this budget.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BudgetList;
