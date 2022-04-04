import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import python_logo from "../../static/img/python logo.png";

const Languages = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img src={python_logo} />
        </Card>
      </Col>
    </Row>
  );
};

export default Languages;
