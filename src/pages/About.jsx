import { Container, Row, Col, Card, Image, Figure } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const BASE = process.env.PUBLIC_URL;

export default function About() {


  return (
    <>
      {/* About Section */}
      <Container className={`mt-4 ${styles.aboutContainer}`}>
        <Card className={`p-4 mb-4 ${styles.customCard}`}>
          <Row className="align-items-start">
            {/* Portrait */}
            <Col md={4} className="text-center mb-3 mb-md-0">
              <Image
                src={`${BASE}/img/About_dan_finley_portrait.jpg`}
                alt="Dan Finley Portrait"
                fluid
              />
            </Col>

            {/* Bio */}
            <Col md={8}>
              <p className={styles.aboutText}>
                Daniel Finley (he/him) is a Thai-American photographer, born and
                raised in Wisconsin, educated in New York City, and now based in
                Seattle. He’s been known as a New York Times featured filmmaker,
                a published/award-winning writer, and a photographer inducted
                into Nikon’s Emerging Photographer Hall of Fame.
              </p>

              <p className={styles.aboutText}>
                On the Meyer-Briggs personality test, Dan is an INTJ-A. You can
                read more about what that means{" "}
                <a
                  href="https://www.16personalities.com/intj-personality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>

              <p className={styles.aboutText}>
                Contact:{" "}
                <a href="mailto:dannyjive@gmail.com">dannyjive@gmail.com</a>
              </p>

              {/* Social Links */}
              <Row className="mt-3">
                <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://www.linkedin.com/in/dfin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />

                    <span className={styles.socialText}>LinkedIn</span>
                  </a>
                </Col>

                <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://github.com/dannyjive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon
                      icon="fa-brands fa-square-github"
                      size="2xl"
                    />

                    <span className={styles.socialText}>GitHub</span>
                  </a>
                </Col>

                {/* <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://www.tiktok.com/@danfinleybooks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon icon={["fab", "fa-tiktok"]} size="2x" />

                    <span className={styles.socialText}>
                      TikTok
                    </span>
                  </a>
                </Col> */}

                <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://www.youtube.com/@TheStoryGrind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon icon="fa-brands fa-square-youtube" size="2xl" />

                    <span className={styles.socialText}>
                      YouTube 
                    </span>
                  </a>
                </Col>

                <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://www.instagram.com/danfinleybooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="2xl" />

                    <span className={styles.socialText}>
                      Instagram
                    </span>
                  </a>
                </Col>

                <Col xs={6} md={4} className="mb-2 d-flex align-items-center">
                  <a
                    href="https://bsky.app/profile/danfinleybooks.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinks}
                  >
                    <FontAwesomeIcon
                      icon={["fab", "square-bluesky"]}
                      size="2x"
                    />

                    <span className={styles.socialText}>
                      Bluesky
                    </span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Equipment Section */}
      <Container className={`mb-5 ${styles.aboutContainer}`}>
        <Card className={`p-4 mb-4 ${styles.customCard}`}>
          <h6 className={`text-center mt-3 mb-4 ${styles.equip}`}>Equipment of Choice</h6>
          <p className="col-lg-10 mx-auto">
            Dan loves his Toyo 45 A2 with Ilford HP5, black and white film which he
            develops at home. He develops with a Stearman Press SP-455
            developing tank and uses Kodak D76 developer (He prefers Rodinal but
            it’s getting hard to find).
          </p>

          <Row className="justify-content-center">
            <Col sm={5} className="d-flex justify-content-center mb-3">
              <Figure>
                <Figure.Image
                  src={`${BASE}/img/About_LFcamera.jpg`}
                  alt="large format camera"
                  fluid
                  rounded
                />
                <Figure.Caption className={styles.figureCaption}>
                  Toyo 45 A2
                </Figure.Caption>
              </Figure>
            </Col>

            <Col sm={5} className="d-flex justify-content-center mb-3">
              <Figure>
                <Figure.Image
                  src={`${BASE}/img/About_HP5Film.jpg`}
                  alt="Ilford HP5 Film"
                  fluid
                  rounded
                />
                <Figure.Caption className={styles.figureCaption}>
                  Ilford HP5 4x5 Film
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Card>
      </Container>
      <Footer/>
    </>
  );
}
