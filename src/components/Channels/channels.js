import { Row, Col } from "react-bootstrap";
import style from "./channels.module.css";

function Channels() {
  return (
    <>
      <div className={style.wholeBodyMargin}>
        <Row>
          <Col md={6}>
            <h4>Channels</h4>
          </Col>
          <Col md={6}>
            <small>Browse all channels</small>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
          <Col md={6}>
            <div className={style.squareCardSmall}></div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Channels;
