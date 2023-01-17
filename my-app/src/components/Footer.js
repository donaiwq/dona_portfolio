import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaLinkedinIn,FaInstagram,FaGithub } from 'react-icons/fa'

// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" >
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://www.linkedin.com/feed/"> <FaGithub /> </a>
              <a href="https://www.linkedin.com/feed/"> <FaInstagram /> </a>
              <a href="https://www.linkedin.com/feed/"> <FaLinkedinIn /> </a>
            </div>

            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}