import React from "react";
import Auth from "../utils/auth"
import DisplayBarsExpense from "../components/DisplayBarsExpense";
import Home from './Home';

const Receipt = () => {
    if (Auth.loggedIn()) {
        return (
            <div>
                <DisplayBarsExpense />
            </div>
        )
    } else {
        return (
            <Home />
           );
    }
}

    export default Receipt;
