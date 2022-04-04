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
        <Col sm={3}>
          <Card>
            <Card.Img src={react} />
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Card.Img src={plotly} />
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Card.Img src={pandas} />
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Card.Img src={bootstrap} />
          </Card>
        </Col>
      </Row>

      <Row className="techstack-items">
        <Col sm={3}>
          <Card>
            <Card.Img src={selenium} />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src={mysql} />
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Img src={flask} />
          </Card>
        </Col>

        <Col sm={3}>
          <Card>
            <Card.Img src={debian} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Frameworks;
