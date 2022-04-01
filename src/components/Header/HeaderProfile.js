import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
  BsInstagram,
} from "react-icons/bs";

const HeaderProfile = () => {
  return (
    <div className="profile-container">
      <img alt="" src="https://i.pravatar.cc/100" className="profile-picture" />
      <Row className="social-row">
        <Col>
          <a href="https://github.com/TitusAzevedo" className="social-icon">
            <BsGithub />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/titus-azevedo-neuschutz-442124211/"
            className="social-icon"
          >
            <BsLinkedin />
          </a>
        </Col>
        <Col>
          <a href="mailto:titus.azevedo@gmail.com" className="social-icon">
            <BsEnvelopeFill />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.instagram.com/titus_a_n/"
            className="social-icon"
          >
            <BsInstagram />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderProfile;
