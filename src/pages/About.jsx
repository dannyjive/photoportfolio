import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./About.module.css"; 

export default function About() {
  return (
    <Container className="mt-1">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="mt-5">
            <Card.Body>
              <h5 className="card-title text-center text-uppercase">
                About Dan
              </h5>

              <Row className="mt-4">
                {/* Portrait */}
                <Col xs={12} md={4} className="text-center mb-4">
                  <img
                    className={`img-fluid rounded ${styles.headshot}`}
                    src="/img/dan_finley_portrait.jpg"
                    alt="Dan Finley Portrait"
                  />
                </Col>

                {/* Bio */}
                <Col xs={12} md={7}>
                  <p>
                    Daniel Finley (he/him) is a Thai-American photographer,
                    born and raised in Wisconsin, educated in New York City,
                    and now based in Seattle. He’s been known as a New York
                    Times featured filmmaker, a published/award-winning writer,
                    and a photographer inducted into Nikon’s Emerging
                    Photographer Hall of Fame.
                  </p>

                  <p>
                    On the Meyer-Briggs personality test, Dan is an INTJ-A. You
                    can read more about what that means{" "}
                    <a
                      className={styles.link}
                      href="https://www.16personalities.com/intj-personality"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here.
                    </a>
                  </p>

                  <p>
                    Contact:{" "}
                    <a className={styles.link} href="mailto:dannyjive@gmail.com">
                      dannyjive@gmail.com
                    </a>
                  </p>

                  {/* Social Links */}
                  <ul className="list-unstyled mt-4">
                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://www.linkedin.com/in/dfin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/linkedin.png" alt="LinkedIn" className={styles.icon} />
                      </a>
                      <span>Resume</span>
                    </li>

                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://github.com/dannyjive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/github.png" alt="GitHub" className={styles.icon} />
                      </a>
                      <span>Coding projects</span>
                    </li>

                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://www.tiktok.com/@danfinleybooks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/tiktok.png" alt="TikTok" className={styles.icon} />
                      </a>
                      <span>A writer and artist learning to code</span>
                    </li>

                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://www.youtube.com/@TheStoryGrind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/youtube.png" alt="YouTube" className={styles.icon} />
                      </a>
                      <span>A YouTube show about storytelling for storytellers</span>
                    </li>

                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://www.instagram.com/danfinleybooks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/instagram.png" alt="Instagram" className={styles.icon} />
                      </a>
                      <span>Comics and fiction</span>
                    </li>

                    <li className={`d-flex align-items-center mb-2 ${styles.socialItem}`}>
                      <a
                        href="https://bsky.app/profile/danfinleybooks.bsky.social"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                      >
                        <img src="/img/bluesky.png" alt="Bluesky" className={styles.icon} />
                      </a>
                      <span>Comics, fiction, and random stuff</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
