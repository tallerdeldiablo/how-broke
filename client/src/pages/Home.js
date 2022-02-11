import React from "react";
import BudgetList from "../components/BudgetList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import Display from "../components/Display";
import { LOGIN } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

// const Home = () => {
//   return (
//     <div className="container">
//       <CategoryMenu />
//       <BudgetList />
//       <Cart />
//       <BudgetInput />
//       <BillsInput />
//       <BillsList />
//       <Display />
//     </div>
//   );
// };

const Home = () => {

  if (Auth.loggedIn()) {
    return (
      <main>
      <CategoryMenu />
      {/* <BudgetList /> */}
      <Cart />
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
