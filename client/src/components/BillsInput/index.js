import React from "react";
import "./style.css";

export default function FincanceInput() {
    return (
        <section id="finances-input">

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