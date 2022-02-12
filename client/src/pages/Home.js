import React from "react";

import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import Display from "../components/Display";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const Home = () => {

  if (Auth.loggedIn()) {
    return (
      <main>
        <BudgetInput />
      <BillsInput />
      <BillsList />
      <Display /> 
      
      </main>
    );
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

 
};

export default Home;
