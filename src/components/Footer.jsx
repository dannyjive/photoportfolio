import { Container, Row, Col } from "react-bootstrap";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={10} className="my-3 text-center">
            <p className="footerText">This website was designed and coded by &copy; {currentYear} Dan Finley. All rights reserved.</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}
