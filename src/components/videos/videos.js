import { Container, Row, Col } from "react-bootstrap";
import style from "./videos.module.css";

function Videos() {
  return (
    <>
      <Row>
        <Col md={6}>
          <h4>Videos</h4>
        </Col>
        <Col md={6}>
          <small>Browse all videos</small>
        </Col>
      </Row>
      <Row className="g-2">
        <Col sm={8}>
          <div className={style.squareCard}>
            <div></div>
          </div>
          <Row className="g-2">
            <Col sm={6}>
              <div className={style.squareCardSmall}>
                <div></div>
              </div>
            </Col>
            <Col sm={6}>
              <div className={style.squareCardSmall}>
                <div></div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <div className={style.squareCardSmall}>
            <div></div>
          </div>
          <div className={style.squareCardSmall}>
            <div></div>
          </div>
          <div className={style.squareCardSmall}>
            <div></div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Videos;
