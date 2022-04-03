import React from "react";
import { Col, Row } from "react-bootstrap";

const ResumeBody = () => {
  return (
    <Row>
      <Col sm={6}>
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Bachelor of Science</h4>
          <h5>2020-2023</h5>
          <p>Lorme ipsum</p>
        </div>
      </Col>
      <Col sm={6}></Col>
    </Row>
  );
};

export default ResumeBody;
