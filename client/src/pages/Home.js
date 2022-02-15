import React from "react";

import BillsInput from "../components/BillsInput";
import BillsList from "../components/BillsList";
import BudgetInput from "../components/BudgetInput";
import Display from "../components/Display";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Display2 from "../components/Display2";
import "./style.css";

import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Home = () => {

  if (Auth.loggedIn()) {
    return (
    <>

    <main>
    {/* <BudgetInput />
    <BillsInput />
    <BillsList /> */}
    <Display /> 
      
    </main>
 

      <div className="loweringContent">

      </div>
       {/* <main> */}
        {/* <BudgetInput />
       <BillsInput />
       <BillsList /> */}
  
      
       {/* </main> */}
      </>


    );
  } else {
    return (<>
    
    <Container>
  <Row>
    <Col xs={{ order: 'last' }}>First, but last</Col>
    <Col xs>   MORE MONEY MORE PROBLEMS
        
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
      </ul></Col>
    <Col xs={{ order: 'first' }}>Third, but first</Col>
  </Row>
</Container>
  
      </>
    );
  }

 
};

export default Home;
