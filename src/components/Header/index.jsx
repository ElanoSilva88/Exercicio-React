import { useState } from 'react'
import styles from './Header.module.css'

function Header(){
const [ showMenu, setShowMenu ] = useState(false)
const toggleMenu = () => {
    setShowMenu(!showMenu)
}



    return(
        <header className={styles.header}>
            <a href=""><span>Elano Silva</span>
            </a>
            <nav 
            className={`${styles.menuSandwich} ${ showMenu ? styles.show : ''}`}
            onClick={toggleMenu}
            >
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contatos</a>
            </nav>
            <div className={styles.menuButton}
                onClick={toggleMenu}
                >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>

    )
}

export default Header