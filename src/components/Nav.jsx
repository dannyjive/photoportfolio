import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const { filter, setFilter } = useFilter();

  const categories = [
    "all",
    "separator",
    "environmental",
    "cinematic",
    "studio",
    "street",
    "fashion",
    "landscape",
    "abstract",
    "medical",
    "retouching",
    "motion",
    "separator",
    "4x5",
    "b&w",
    "color",
    "film",
    "digital",
    "separator",
    "about",
  ];

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
            if (category === "about") {
              return (
                <li key={category}>
                  <Link to="/about" role="button" className={styles.filterLink} onClick={() => setFilter(category)}>
                    #{category}
                  </Link>
                </li>
              );
            }
            if (category === "motion") {
              return (
                <li key={category}>
                  <Link
                    to="/motion"
                    role="button"
                    className={styles.filterLink}
                    onClick={() => setFilter(category)}
                  >
                    #{category}
                  </Link>
                </li>
              );
            }

            return (
              <li key={category}>
                <Link
                  to="/gallery"
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
        <h2>{filter}</h2>
        <hr className="headline" />
      </div>
    </>
  );
};

export default Nav;
