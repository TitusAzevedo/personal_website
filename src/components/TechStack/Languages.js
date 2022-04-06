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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.python.org/"
            >
              <Card.Img src={python_logo} />
            </a>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
            >
              <Card.Img src={javascript_logo} />
            </a>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.java.com/de/"
            >
              <Card.Img src={java_logo} />
            </a>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.w3schools.com/html/html_css.asp"
            >
              <Card.Img src={htmlcss} />
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Languages;
