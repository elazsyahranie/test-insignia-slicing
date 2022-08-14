import { Container, Row, Col } from "react-bootstrap";
import style from "./videos.module.css";

function Videos() {
  return (
    <>
      <div className={style.wholeBodyMargin}>
        <Row className={style.videoBrowseMenu}>
          <Col lg={6} md={6}>
            <h4>Videos</h4>
          </Col>
          <Col lg={6} md={6}>
            <small>Browse all videos</small>
          </Col>
        </Row>
        <div className={style.videoBrowseMenuSmaller}>
          <div className="d-flex justify-content-between">
            <h4>Videos</h4>
            <small>Browse all videos</small>
          </div>
        </div>
        <Row className="g-2">
          <Col lg={8} md={8} sm={12}>
            <div className={style.squareCard}>
              <div></div>
            </div>
            <Row className="g-2">
              <Col lg={6} md={6} sm={12}>
                <div className={style.squareCardSmall}>
                  <div></div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
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

export default Videos;
