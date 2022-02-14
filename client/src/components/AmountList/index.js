import React from 'react';

const AmountList = ({ amounts = [] }) => {
  if (!amounts.length) {
    return <h3>No Amounts Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Amounts
      </h3>
      <div className="flex-row my-4">
        {amounts &&
          amounts.map((amount) => (
            <div key={amount._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {amount.amountAuthor} amounted{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {amount.createdAt}
                  </span>
                </h5>
                <p className="card-body">{amount.amountValue}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AmountList;
