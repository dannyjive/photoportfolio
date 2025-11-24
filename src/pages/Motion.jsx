import { Card } from "react-bootstrap";

export default function Motion() {
  return (
    <>
      
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
            width: "85%",
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/663552906?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Dan Finley Director's Reel"
          ></iframe>
        </div>

    </>
  );
}
