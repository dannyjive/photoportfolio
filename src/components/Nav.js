import styles from './Nav.module.css';


const Nav = ({categories, onSelectCategory}) => {
  return (
    <nav className={styles.nav}>
        <h1 className={styles.h1}>
          <a href="index.html">DAN FINLEY PHOTO</a>
        </h1>
        <ul id="filterlist">
          {categories.map((category) => (
            <li key={category}>
              <button onClick={() => onSelectCategory(category)}>#{category}</button>
            </li>
          ))}
          <li>
            <button>
              <a href="about.html">#about</a>
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default Nav