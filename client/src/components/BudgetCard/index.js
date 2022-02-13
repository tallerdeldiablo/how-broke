import React from "react";

import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import { QUERY_ALL_BUDGETS } from '../../utils/queries';
import "./style.css";

export default function BudgetCard() {
  // const { loading, data } = useQuery(QUERY_ALL_BUDGETS);

  // Use optional chaining to check if data exists and if it has a budgets property. If not, return an empty array to use.
  // const buds = data?.budgets || [];

  return (
    <Container>
      <Row>
        <Col>
          <Card className="overallBudget" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h2>Balance</h2>
              </Card.Title>
              <Card.Text className="d-flex justify-content-between fw-normal">
                <h3>$1,897</h3>
                <img src="https://img.icons8.com/color/90/000000/wallet--v2.png" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="income" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h2>Income</h2>
              </Card.Title>
              <Card.Text className="d-flex justify-content-between fw-normal">
                <h3>$5,600</h3>
                <img src="https://img.icons8.com/color/90/000000/man-holding-bags-with-money-skin-type-4.png" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card className="expenses" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h2>Expenses</h2>
              </Card.Title>
              <Card.Text className="d-flex justify-content-between fw-normal">
                <h3>$5,600</h3>
                <img src="https://img.icons8.com/color/95/000000/empty-pockets.png" />
              </Card.Text>
              <img src="https://img.icons8.com/color/60/000000/add--v1.png" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
