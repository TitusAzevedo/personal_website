import React from "react";
import { Row, Col } from "react-bootstrap";
import profileImg from "../../static/img/self_portrait.jpg";
import { BiChevronRight } from "react-icons/bi";

const AboutProfile = () => {
  return (
    <Row>
      <Col sm={3}>
        <img src={profileImg} alt="" className="about-profile-img" />
      </Col>
      <Col sm={9}>
        <h3>Software Engineer & Programmer</h3>
        <p>Lorem Ipsum</p>
        <Row className="about-info">
          <Col sm={6}>
            <ul>
              <li>
                <BiChevronRight className="ul-icon" />
                ye
              </li>
              <li>
                <BiChevronRight />
                ye
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <ul>
              <li>
                <BiChevronRight className="ul-icon" />
                ye
              </li>
              <li>
                <BiChevronRight className="ul-icon" />
                ye
              </li>
              <li>
                <BiChevronRight className="ul-icon" />
                you should hire me
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutProfile;
