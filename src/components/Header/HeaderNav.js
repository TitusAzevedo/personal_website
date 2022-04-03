import React from "react";
import { Nav } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <Nav defaultActiveKey="#hero" className="flex-column">
      <Nav.Link href="#hero">
        <h4 className="link-text">Home</h4>
      </Nav.Link>
      <Nav.Link href="#about">
        <h4 className="link-text">About</h4>
      </Nav.Link>
      <Nav.Link href="#resume">
        <h4 className="link-text">Resume</h4>
      </Nav.Link>
      <Nav.Link href="/home">
        <h4 className="link-text">Tech Stack</h4>
      </Nav.Link>
    </Nav>
  );
};

export default HeaderNav;
