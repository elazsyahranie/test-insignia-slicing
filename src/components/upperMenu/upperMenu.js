import { Container, Row, Col } from "react-bootstrap";
import style from "./upperMenu.module.css";

function UpperMenu() {
  return (
    <>
      <Container>
        <Row className={style.upperMenuWhiteBorder}>
          <Col sm={12}>
            <p className={style.upperMenuParagraph}>
              Videos / People / Documents / Events / Communities / Favorites /
              Channels
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpperMenu;
