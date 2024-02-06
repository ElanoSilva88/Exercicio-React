import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>Elano Silva</span>
      </Link>
      <nav
        className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
        onClick={toggleMenu}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  );
}

export default Header;
