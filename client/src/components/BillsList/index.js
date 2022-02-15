import React from "react";
import "./style.css";

export default function Budget() {
    return (
        <section id="budget">
        <h3 id="rent-list-title">Rent</h3>
        {/* <ul className="bill-tag">
            <li>Feb 2022 $1500</li>
        </ul> */}
        <h3 id="insurance-list-title">Insurance</h3>
        <h3 id="groceries-list-title">Groceries</h3>
        <h3 id="utilities-list-title">Utilities</h3>
        <h3 id="other-list-title">Other</h3>
    </section>
    )
};