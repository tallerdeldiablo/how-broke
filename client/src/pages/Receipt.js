import React from "react";
import Auth from "../utils/auth"
import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import { Link } from 'react-router-dom';

const Receipt = () => {
    if (Auth.loggedIn()) {
        return (
            <div>
                <BudgetInput />
                <BillsInput />
                <BillsList />
            </div>
        )
    } else {
        return (<>
            MORE MONEY MORE PROBLEMS
               
               <br></br>
               Animation logo intro
               <br></br>
               Loading
               <br></br>
             <ul className="flex-row">
       
              
       
       
               <li>
                 <Link to="/signup">
                   Signup
                 </Link>
               </li>
               <li className="mx-1">
                 <Link to="/login">
                   Login
                 </Link>
               </li>
             </ul>
             </>
           );
    }
}

    export default Receipt;