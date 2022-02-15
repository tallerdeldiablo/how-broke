import React from "react";
import { useQuery } from '@apollo/client';

import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import './style.css';

export default function Display2() {

    // const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

    // Use optional chaining to check if data exists and if it has a budgets property. If not, return an empty array to use.
    // const buds = data?.budgets || [];

    return (
    
<>
      <div className="overview-container">
        <div>
            <h1>Financial Overview</h1>
          </div>
          <div>
            <h3>Monthly Income: $6,000</h3>
          </div>
          <br></br>

        <div className="place-container">
          <div>
            <ul>Overall Monthly Budget: $4,500 <img src="https://img.icons8.com/color/40/000000/budget.png"/></ul>
            <ul>Housing: $1,200 <img src="https://img.icons8.com/color/35/000000/home.png"/></ul>
            <ul>Bills: $2,100 <img src="https://img.icons8.com/external-itim2101-flat-itim2101/35/000000/external-bills-financial-itim2101-flat-itim2101.png"/></ul>
            <ul>Food: $250 <img src="https://img.icons8.com/color/48/000000/ingredients.png"/></ul>

            <ul>Entertainment: $250 <img src="https://img.icons8.com/color/35/000000/theme-park.png"/></ul>
            <ul>Other: $700 <img src="https://img.icons8.com/color/40/000000/money-transfer.png"/></ul>

          </div>
          <ProgressBar className="rounded-pill">
  <ProgressBar striped variant="success" now={35} key={1} />
  <ProgressBar variant="warning" now={25} key={2} />
  <ProgressBar striped variant="danger" now={20} key={3} />
</ProgressBar>
        </div>
      </div>
      <br></br>
  </>
   
    )
};