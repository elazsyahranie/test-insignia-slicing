import { Row, Col } from "react-bootstrap";
import style from "./activity.module.css";

function Activity() {
  return (
    <>
      <Row className={style.channelMenuWhiteBorder}>
        <Col md={6}>
          <h4>Activity</h4>
        </Col>
        <Col md={6}>
          <small>View timeline / Filter Activities</small>
        </Col>
      </Row>
      <Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className={style.squareCardSmall}>
              <div></div>
            </div>
          </Col>
          <Col md={8}>
            <h6>
              John Stainior <span className="fw-light">commented</span>
            </h6>
            <h6>Well, I am liking how it captures the audience</h6>
            <h6>Two weeks ago</h6>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className={style.squareCardSmall}>
              <div></div>
            </div>
          </Col>
          <Col md={8}>
            <h6>
              John Stainior <span className="fw-light">commented</span>
            </h6>
            <h6>Well, I am liking how it captures the audience</h6>
            <h6>Two weeks ago</h6>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className={style.squareCardSmall}>
              <div></div>
            </div>
          </Col>
          <Col md={8}>
            <p>
              <h6>
                John Stainior <span className="fw-light">commented</span>
              </h6>
              <p>
                <h6>Well, I am liking how it captures the audience</h6>
                <h6>Two weeks ago</h6>
              </p>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className={style.squareCardSmall}>
              <div></div>
            </div>
          </Col>
          <Col md={8}>
            <h6>
              John Stainior <span className="fw-light">commented</span>
            </h6>
            <h6>Well, I am liking how it captures the audience</h6>
            <h6>Two weeks ago</h6>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className={style.squareCardSmall}>
              <div></div>
            </div>
          </Col>
          <Col md={8}>
            <p>
              <h6>
                John Stainior <span className="fw-light">commented</span>
              </h6>
              <p>
                <h6>Well, I am liking how it captures the audience</h6>
                <h6>Two weeks ago</h6>
              </p>
            </p>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Activity;
