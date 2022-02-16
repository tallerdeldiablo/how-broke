import React from "react";
import Display from "../components/Display";
import Auth from '../utils/auth';
import "./style.css";
import Login from './Login'

const Home = () => {

  if (Auth.loggedIn()) {
    return (
      <>
        <main>
          <Display />

        </main>


        <div className="loweringContent">

        </div>
      </>
    );
  } else {
    return (<>
      <Login />
    </>
    );
  }
};

export default Home;
