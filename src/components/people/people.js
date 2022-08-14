import { Container, Row, Col } from "react-bootstrap";
import style from "./people.module.css";

function People() {
  return (
    <>
      <div className={style.wholeBodyMargin}>
        <Row className={style.peopleBrowseMenu}>
          <Col lg={6} md={6}>
            <h4>People</h4>
          </Col>
          <Col lg={6} md={6}>
            <small>View all</small>
          </Col>
        </Row>
        <div className={style.peopleBrowseMenuSmaller}>
          <div className="d-flex justify-content-between">
            <h4>People</h4>
            <small>View all</small>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default People;
