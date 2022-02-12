import React from "react";

export default function FincanceInput() {
    return (
        <section id="finances-input">
            <h3>Update Budget</h3>
            <div className="secondary-container">
            <input type="text" id="budget-amount" name="budget-amount" placeholder="Budget" />
            <button id="budget-button" className="button">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
</svg>
              </button>
        </div>
            <h3>Add Bill</h3>
            <div id="bill-container" className="secondary-container">
                <select name="bills" id="bills-input">
                    <option value="bills">Bills</option>
                    <option value="rent">Rent</option>
                    <option value="insurance">Insurance</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="other">Other</option>
                </select>

                <input type="text" id="bill-name" name="bill-name" placeholder="Bill Name" />
                <input type="text" id="bill-amount" name="bill-amount" placeholder="Amount" />
                <button id="bill-button" className="bill-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></button>
            </div>
        </section>
    )
};