import React from "react";
import Auth from "../utils/auth"
import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import { Link } from 'react-router-dom';
import Home from './Home';

const Receipt = () => {
    if (Auth.loggedIn()) {
        return (
            <div>
                <BillsInput />
                <BillsList />
            </div>
        )
    } else {
        return (
            <Home />
           );
    }
}

    export default Receipt;