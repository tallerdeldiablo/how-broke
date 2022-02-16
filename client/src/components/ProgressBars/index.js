import React from "react";

import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

// import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import "./style.css";

export default function ProgressBars() {
  // const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

  // Use optional chaining to check if data exists and if it has a budgets property. If not, return an empty array to use.
  // const buds = data?.budgets || [];


  // Progress bar variables go here
  const amountHere= 67

  return (
      <Container className="progressComponent">
          <div>
          <img src="https://img.icons8.com/color/49/000000/home.png"/>
          <h3 className="d-flex justify-content-between fw-normal">Home
          <p>-$1,300</p>
          </h3>
    <ProgressBar className="rounded-pill">
  <ProgressBar variant="success" now={amountHere} key={1} />
</ProgressBar>
</div>

<br></br>

<div>
<img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/60/000000/external-phone-essentials-icongeek26-flat-icongeek26.png"/>
<h3 className="d-flex justify-content-between fw-normal">Phone
<p>-$135</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="warning" now={70} key={1} />
</ProgressBar>
</div>


<br></br>

<div>
<img src="https://img.icons8.com/doodle/60/000000/skateboard--v1.png"/>
<h3 className="d-flex justify-content-between fw-normal">Transportation
<p>-$450</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="success" now={35} key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-noodles-takeaway-wanicon-flat-wanicon.png"/>
<h3 className="d-flex justify-content-between fw-normal">Food
<p>-$350</p></h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="warning" now={55} key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-entertainment-studio-color-line-others-phat-plus-5.png"/>
<h3 className="d-flex justify-content-between fw-normal">Entertainment
<p>-$250</p></h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="danger" now={90} key={1} />
</ProgressBar>
</div>



<br></br>

<div>
<img src="https://img.icons8.com/color/48/000000/money-transfer.png"/>
<h3 className="d-flex justify-content-between fw-normal">Other
<p>-$225</p>
</h3>
<ProgressBar className="rounded-pill">
  <ProgressBar variant="danger" now={100} key={1} />
</ProgressBar>
</div>

</Container>




  );
}
