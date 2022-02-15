import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    //took bg-primary out of className
    <header className="text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
          <img src={logo} alt="logo" />
          
          </Link>
     
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/home">
                {Auth.getProfile().data.username}'s Budget
              </Link>
              {/* Testing out Bill/Receipt page lines 30-33 -Mario */}
              <Link className="btn btn-lg btn-info m-2" to="/receipt">
                {Auth.getProfile().data.username}'s Bills
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
