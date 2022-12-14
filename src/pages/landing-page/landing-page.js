import { Container, Row, Form, Col, Button } from "react-bootstrap";
import style from "./landing-page.module.css";

import UpperMenu from "../../components/upperMenu/upperMenu";
import People from "../../components/people/people";
import Videos from "../../components/videos/videos";
import Documents from "../../components/documents/documents";

import Activity from "../../components/Activity/activity";
import Channels from "../../components/Channels/channels";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <>
      <Container className={style.mobileMenuVisibility}>
        <div className={`d-flex justify-content-between ${style.mobileMenu}`}>
          <FontAwesomeIcon icon={faBars} className={style.barsMenuIcon} />
          <h2 className={style.upperMostText}>
            <span className={style.whiteText}>Social</span>
            <span className={`fw-light ${style.whiteText}`}>Network</span>
          </h2>
          <div className={`d-flex justify-content-between`}>
            <FontAwesomeIcon icon={faArrowUp} className={style.uploadIcon} />
            <FontAwesomeIcon
              icon={faUser}
              className={`ms-3 ${style.userIcon}`}
            />
          </div>
        </div>
      </Container>
      <Container>
        <Row className={style.upperMostMenuContainer}>
          <Col lg={4} md={4} sm={4}>
            <h2 className={style.upperMostText}>
              <span className={style.whiteText}>Social</span>
              <span className={`fw-light ${style.whiteText}`}>Network</span>
            </h2>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <Form>
              <Form.Control
                type="text"
                name="searchForm"
                className={style.noBorderRadius}
              />
            </Form>
          </Col>
          <Col lg={2} md={2} sm={2}>
            <Button variant="light" className={`${style.upperUploadButton}`}>
              <span className={style.redText}>Upload</span>
            </Button>
          </Col>
          <Col lg={2} md={2} sm={2} className="d-flex">
            <div className={style.upperUserIconContainer}>
              <FontAwesomeIcon
                icon={faUser}
                className={`${style.upperUserIcon}`}
              />
            </div>
            <p
              className={`${style.noPaddingParagraph} ${style.smallerInnerSpace}`}
            >
              <span className={`fs-5 fw-bolder ${style.whiteText}`}>
                Waseem
              </span>{" "}
              <br />
              <small className={`${style.whiteText}`}>Arshad</small>
            </p>
          </Col>
        </Row>
      </Container>
      <UpperMenu />
      <Container className={style.largerMenu}>
        <Row className={`mt-4 ${style.largerMenuWhiteBorder}`}>
          <Col lg={6} md={12} sm={12}>
            <Videos className={style.largeMenuComponent} />
            <People className={style.largeMenuComponent} />
            <Documents className={style.largeMenuComponent} />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Activity />
            <Channels />
          </Col>
        </Row>
      </Container>
      <Container className={style.footer}>
        <Row>
          <FontAwesomeIcon
            icon={faSquareTwitter}
            className={`me-3 ${style.fontAwesomeCustomIcon}`}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`me-3 ${style.fontAwesomeCustomIcon}`}
          />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className={`me-3 ${style.fontAwesomeCustomIcon}`}
          />
        </Row>
        <Row>
          <p className={style.footerParagraph}>
            <span className="me-3">About</span>
            <span className="me-3">/</span>
            <span className="me-3">For Business</span>
            <span className="me-3">/</span>
            <span className="me-3">Suggestions</span>
            <span className="me-3">/</span>
            <span className="me-3">Help & FAQs</span>
            <span className="me-3">/</span>
            <span className="me-3">Contacts</span>
            <span className="me-3">/</span>
            <span className="me-3">Pricing</span>
          </p>
        </Row>
        <Row className={style.footerCopyright}>
          <span>?? Copyright 2013 companyname inc</span>
        </Row>
      </Container>
    </>
  );
}

export default LandingPage;
