import { useLocation, Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  const { filter, setFilter } = useFilter();

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
    "proj:glass",
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
        <h1 className={styles.h1}>
          <Link to="/" onClick={() => setFilter("all")}>
            <span className={styles.hline}>DAN FINLEY</span>
            <span className={styles.hline}>PHOTO</span>
          </Link>
        </h1>

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
                <li key={category}>
                  <Link
                    to="/about"
                    className={styles.filterLink}
                    onClick={() => setFilter("about")}
                  >
                    #about
                  </Link>
                </li>
              );
            }

            // Motion Page
            if (category === "motion") {
              return (
                <li key={category}>
                  <Link
                    to="/motion"
                    className={styles.filterLink}
                    onClick={() => setFilter("motion")}
                  >
                    #motion
                  </Link>
                </li>
              );
            }

            // Gallery categories
            return (
              <li key={category}>
                <Link
                  to={`/gallery/${category.toLowerCase()}`}
                  className={styles.filterLink}
                  onClick={() => setFilter(category)}
                >
                  #{category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="headlineContainer">
        <hr className="headline" />
        <h2>{headline}</h2>
        <hr className="headline" />
      </div>
    </>
  );
};

export default Nav;
