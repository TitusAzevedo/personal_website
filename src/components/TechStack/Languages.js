import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import python_logo from "../../static/img/python logo.png";
import javascript_logo from "../../static/img/java_script.png";
import java_logo from "../../static/img/java.png";
import htmlcss from "../../static/img/htmlcss.svg";

const Languages = () => {
  return (
    <div className="container">
      <Row className="techstack-items">
        <Col sm={3}>
          <Card>
            <Card.Img src={python_logo} />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src={javascript_logo} />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src={java_logo} />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src={htmlcss} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
