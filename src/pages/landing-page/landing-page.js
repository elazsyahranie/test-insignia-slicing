import { Container, Row, Form, Col, Button } from "react-bootstrap";
import style from "./landing-page.module.css";

import People from "../../components/people/people";
import Videos from "../../components/videos/videos";
import Documents from "../../components/documents/documents";

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
      <Container fluid>
        <div className="mt-4">
          <Videos />
        </div>
        <div className="mt-4">
          <People className="mt-4" />
        </div>
        <div className="mt-4">
          <Documents className="mt-4" />
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
