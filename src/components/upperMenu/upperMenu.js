import { Container, Row, Col } from "react-bootstrap";
import style from "./upperMenu.module.css";

function UpperMenu() {
  return (
    <>
      <Container>
        <Row className={style.upperMenuWhiteBorder}>
          <p className={style.upperMenuParagraph}>
            <span className="me-3">Videos</span>
            <span className="me-3">/</span>
            <span className="me-3">People</span>
            <span className="me-3">/</span>
            <span className="me-3">Documents</span>
            <span className="me-3">/</span>
            <span className="me-3">Events</span>
            <span className="me-3">/</span>
            <span className="me-3">Communities</span>
            <span className="me-3">/</span>
            <span className="me-3">Favorites</span>
            <span className="me-3">/</span>
            <span className="me-3">Channels</span>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default UpperMenu;
