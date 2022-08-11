import { Container, Row, Col } from "react-bootstrap";
import style from "./upperMenu.module.css";

function UpperMenu() {
  return (
    <>
      <Container>
        <Row className={style.upperMenuWhiteBorder}>
          <Col>
            <h5>Videos</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>People</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>Documents</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>Events</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>Communities</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>Favorites</h5>
          </Col>
          <Col>
            <span>/</span>
          </Col>
          <Col>
            <h5>Channels</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpperMenu;
