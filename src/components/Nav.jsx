import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation, Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  const { filter, setFilter } = useFilter();

  // GSAP animations
  const lettersRef = useRef([]);
  const filtersRef = useRef([]);
  const headlineLinesRef = useRef([]);
  const headlineLettersRef = useRef([]);
  const headlineRef = useRef(null);

  //Logo title animation

   useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { x: 0, opacity: 0 },
      {
        x: 40,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.03,
      }
    );
  }, []);

  const line1 = "DAN FINLEY";
  const line2 = "PHOTO";
  const split = (str) => str.split("");

  // GSAP filter links animation
  useEffect(() => {
    gsap.to(".filterLink", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
    });
  }, []);

  //Horizon line animation

  useEffect(() => {
    // Reset lines first
    gsap.set(headlineLinesRef.current, { scaleX: 0 });

    // Animate lines outward
    gsap.to(headlineLinesRef.current, {
      scaleX: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, [filter]);


  // Filter Headline between <hr/>'s anim

  useEffect(() => {
  // Reset letters
  gsap.set(headlineLettersRef.current, { y: 20, opacity: 0 });

  // Animate each Horizon line Headline character letter upward
  gsap.to(headlineLettersRef.current, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.08,
  });
}, [filter]);


  // Categories

  const categories = [
    "all",
    "separator",
    "environmental",
    "studio",
    "music",
    "fashion:men",
    "fashion:women",
    "beauty",
    "street",
    "landscape",
    "abstract",
    "medical",
    "retouching",
    "motion",
    "separator",
    "proj:cinematic",
    "story:glassblower",
    "separator",
    "4x5",
    "b&w",
    "color",
    "film",
    "digital",
    "separator",
    "about",
  ];

  const headline = location.pathname.startsWith("/about")
    ? "about"
    : location.pathname.startsWith("/motion")
    ? "motion"
    : filter;

  return (
    <>
      <nav className={styles.nav}>
        {/* LOGO */}
        <h1 className={styles.h1}>
          <Link to="/" onClick={() => setFilter("all")}>
            {/* Line 1 */}
            <span className={styles.hline}>
              {split(line1).map((char, i) => (
                <span key={`l1-${i}`} ref={(el) => lettersRef.current.push(el)}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>

            {/* Line 2 */}
            <span className={styles.hline}>
              {split(line2).map((char, i) => (
                <span key={`l2-${i}`} ref={(el) => lettersRef.current.push(el)}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </Link>
        </h1>

        {/* FILTER LINKS */}
        <ul>
          {categories.map((category, index) => {
            if (category === "separator") {
              return (
                <li key={`sep-${index}`} className={styles.separator}></li>
              );
            }

            // About Page
            if (category === "about") {
              return (
                <li
                  key={category}
                  ref={(el) => (filtersRef.current[index] = el)}
                >
                  <div className={styles.mask}>
                    <Link
                      to="/about"
                      className={`${styles.filterLink} filterLink`}
                      onClick={() => setFilter("about")}
                    >
                      #about
                    </Link>
                  </div>
                </li>
              );
            }

            // Motion Page
            if (category === "motion") {
              return (
                <li
                  key={category}
                  ref={(el) => (filtersRef.current[index] = el)}
                >
                  <div className={styles.mask}>
                    <Link
                      to="/motion"
                      className={`${styles.filterLink} filterLink`}
                      onClick={() => setFilter("motion")}
                      loading="lazy"
                    >
                      #motion
                    </Link>
                  </div>
                </li>
              );
            }

            // Gallery categories
            return (
              <li key={category} ref={(el) => (filtersRef.current[index] = el)}>
                <div className={styles.mask}>
                  <Link
                    to={`/gallery/${category.toLowerCase()}`}
                    className={`${styles.filterLink} filterLink`}
                    onClick={() => setFilter(category)}
                  >
                    #{category}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.headlineContainer}>
        <div
          className={`${styles.headlineLine} ${styles.left}`}
          ref={(el) => (headlineLinesRef.current[0] = el)}
        />
        <h2 ref={headlineRef}>
          {headline.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => (headlineLettersRef.current[i] = el)}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <div
          className={`${styles.headlineLine} ${styles.right}`}
          ref={(el) => (headlineLinesRef.current[1] = el)}
        />
      </div>
    </>
  );
};

export default Nav;
