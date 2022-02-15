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
import money from "../assets/mo-money.jpg"

const Home = () => {

  if (Auth.loggedIn()) {
    return (
    <>

    <main>
    {/* <BudgetInput />
    <BillsInput />
    <BillsList /> */}
    <h2 id="greeting">Hello, {Auth.getProfile().data.username}!</h2>
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
  {/* <Row>
    <Col xs={{ order: 'last' }}> First</Col>
    <Col xs>   Mo Money */}
        
        {/* <br></br>
        Animation logo intro
        <br></br>
        Loading
        <br></br> */}
      {/* <ul className="flex-row"> */}

        {/* <li>
          <Link to="/signup">
            Signup
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/login">
            Login
          </Link>
        </li> */}
      {/* </ul></Col> */}
    {/* <Col xs={{ order: 'first' }}> Last</Col> */}
  {/* </Row> */}

  <img src={money} id="michael" alt="money" />
</Container>
  
      </>
    );
  }

 
};

export default Home;
