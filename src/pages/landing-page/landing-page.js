import { Container, Row, Form, Col, Button, Card } from "react-bootstrap";
import style from "./landing-page.module.css";

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
      <Container fluid className="mt-4">
        <Container>
          <Row>
            <Col lg={6}>
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
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Row className="g-2">
                <Col md={3}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </Row> */}

              {/* <Row className={`g-2`}>
                <Col md={7}>
                  <Card className={style.squareCard}></Card>
                  <Row>
                    <Col md={3}>
                      <Card className={style.squareCardSmall}>
                        <Card.Body></Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                  <Card className={style.squareCardSmall}>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default LandingPage;
