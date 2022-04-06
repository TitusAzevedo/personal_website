import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import bootstrap from "../../static/img/bootstrap.png";
import debian from "../../static/img/debian.png";
import flask from "../../static/img/flask.png";
import mysql from "../../static/img/mysql.png";
import pandas from "../../static/img/pandas.png";
import plotly from "../../static/img/plotly.jpg";
import react from "../../static/img/react.png";
import selenium from "../../static/img/selenium.png";

const Frameworks = () => {
  return (
    <div className="container">
      <Row className="techstack-items">
        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
            >
              <Card.Img src={react} />
            </a>
          </Card>
        </Col>

        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://plotly.com/"
            >
              <Card.Img src={plotly} />
            </a>
          </Card>
        </Col>

        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pandas.pydata.org/"
            >
              <Card.Img src={pandas} />
            </a>
          </Card>
        </Col>

        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://getbootstrap.com/"
            >
              <Card.Img src={bootstrap} />
            </a>
          </Card>
        </Col>
      </Row>

      <Row className="techstack-items">
        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.selenium.dev/"
            >
              <Card.Img src={selenium} />
            </a>
          </Card>
        </Col>
        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mysql.com/de/"
            >
              <Card.Img src={mysql} />
            </a>
          </Card>
        </Col>
        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://flask.palletsprojects.com/en/2.1.x/"
            >
              <Card.Img src={flask} />
            </a>
          </Card>
        </Col>

        <Col sm={2}>
          <Card>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.debian.org/index.de.html"
            >
              <Card.Img src={debian} />
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Frameworks;
