import React from 'react';
import './style.css';

const AmountList = ({ amounts = [] }) => {
  if (!amounts.length) {
    return <h3>No Amounts Yet</h3>;
  }

  return (
    <>
      {/* <h3
        id="amount-header"
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Amounts
      </h3> */}
      <div className="flex-row my-4">
        {amounts &&
          amounts.map((amount) => (
            <div key={amount._id} className="col-12 mb-3 pb-3">
              <div id="amounted-card" className="p-3 text-light">
                <h5 id="amounted" className="card-header">
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
