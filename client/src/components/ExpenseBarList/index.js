import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container"
import "./style.css";

const ExpenseList = ({ expenses, title }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  return (
    <div id="expense-list">
      <h3>{title}</h3>


      <Container className="">
          <div>
          <img src="https://img.icons8.com/color/49/000000/home.png"/>
          <h3 className="d-flex justify-content-between fw-normal">{expenses[0].expenseAuthor}
          <p>${expenses[0].expenseValue}</p>
          </h3>
    <ProgressBar className="rounded-pill">
  <ProgressBar variant="danger" now={expenses[0].expenseValue} key={1} />
</ProgressBar>
</div>

<br></br>

<div>
<img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/60/000000/external-phone-essentials-icongeek26-flat-icongeek26.png"/>
<h3 className="d-flex justify-content-between fw-normal">{expenses[1].expenseAuthor}
<p> ${expenses[1].expenseValue}</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="warning" now={expenses[1].expenseValue} key={1} />
</ProgressBar>
</div>


<br></br>

<div>
<img src="https://img.icons8.com/doodle/60/000000/skateboard--v1.png"/>
<h3 className="d-flex justify-content-between fw-normal">{expenses[2].expenseAuthor}
<p>${expenses[2].expenseValue}</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="success" now={expenses[2].expenseValue} key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-noodles-takeaway-wanicon-flat-wanicon.png"/>
<h3 className="d-flex justify-content-between fw-normal">{expenses[3].expenseAuthor}
<p>${expenses[3].expenseValue}</p></h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="warning" now={expenses[3].expenseValue}key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-entertainment-studio-color-line-others-phat-plus-5.png"/>
<h3 className="d-flex justify-content-between fw-normal">Entertainment
<p>${expenses[4].expenseValue}</p></h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="success" now={expenses[4].expenseValue} key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/color/48/000000/money-transfer.png"/>
<h3 className="d-flex justify-content-between fw-normal">Other
<p>${expenses[5].expenseValue}</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="danger" now={expenses[5].expenseValue} key={1} />
</ProgressBar>
</div>

</Container>
    </div>
  );
};

export default ExpenseList;
