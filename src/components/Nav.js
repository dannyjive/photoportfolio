import styles from "./Nav.module.css";

const Nav = ({ categories, onSelectCategory }) => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>
        <a href="index.html">
          <span className={styles.hline}>DAN FINLEY</span>
          <span className={styles.hline}>PHOTO</span>
        </a>
      </h1>
      <ul>
        {categories.map((category, index) => {
          if (category === "separator") {
            return <li key={`sep-${index}`} className={styles.separator}></li>;
          }
          return (
            <li key={category}>
              <button onClick={() => onSelectCategory(category)}>
                #{category}
              </button>
            </li>
          );
        })}
        <li>
          <button>#about</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
