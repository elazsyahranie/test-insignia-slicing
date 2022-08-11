import { Container, Row, Col } from "react-bootstrap";
import style from "./people.module.css";

function People() {
  return (
    <>
      <Row>
        <Col md={6}>
          <h4>People</h4>
        </Col>
        <Col md={6}>
          <small>View all</small>
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

export default People;
