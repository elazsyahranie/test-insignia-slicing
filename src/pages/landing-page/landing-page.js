import { Container, Row, Form, Col, Button } from "react-bootstrap";
import style from "./landing-page.module.css";

import UpperMenu from "../../components/upperMenu/upperMenu";
import People from "../../components/people/people";
import Videos from "../../components/videos/videos";
import Documents from "../../components/documents/documents";

import Activity from "../../components/Activity/activity";
import Channels from "../../components/Channels/channels";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareFacebook } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>
              <span className={style.whiteText}>Social</span>
              <span className="fw-light">Network</span>
            </h1>
          </Col>
          <Col>
            <Form>
              <Form.Control type="text" name="searchForm" />
            </Form>
          </Col>
          <Col>
            <Button variant="light">Upload</Button>
          </Col>
        </Row>
      </Container>
      <UpperMenu />
      <Container className={style.largerMenu}>
        <Row className={`mt-4 ${style.largerMenuWhiteBorder}`}>
          <Col lg={6}>
            <Videos />
            <People className="mt-4" />
            <Documents className="mt-4" />
          </Col>
          <Col lg={6}>
            <Activity />
            <Channels />
          </Col>
          {/* </Row>
        <Row className="mt-4">
          <Col lg={6}>
            <People className="mt-4" />
          </Col>
          {/* <Col lg={6}>
            <Channels />
          </Col> */}
        </Row>
        {/* <div className={`mt-4 pb-4`}>
          <Documents className="mt-4" />
        </div> */}
      </Container>
      <Container className={style.footer}>
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
      </Container>
    </>
  );
}

export default LandingPage;
