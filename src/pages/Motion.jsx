import { Card } from "react-bootstrap";
import styles from "./Motion.module.css";
import Footer from "../components/Footer";

export default function Motion() {
  return (
    <>
      <div className={styles.video}>
        <iframe className={styles.videoFrame}
          src="https://player.vimeo.com/video/663552906?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"

          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Dan Finley Director's Reel"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
}
