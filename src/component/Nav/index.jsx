import styles from './nav.module.scss'
import {useState} from 'react';

export default function Nav() {
    const [isShow, setIsShow] = useState(false);
    const handleNav = () => {
        setIsShow(!isShow);
    }
    return(
        <nav className={`${styles.nav}`}>
            <div className={`${styles.nav__inner}`}>
                <h5>QUICK BOOKING</h5>
                <button onClick={handleNav} className={`button ${styles.hamburger}`}>
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <ul className={`${isShow ? styles.active : ''}`}>
                <li><a className={`${styles.navlist}`} href='/#'>Menu 1</a></li>
                <li><a className={`${styles.navlist}`} href='/#'>Menu 2</a></li>
                <li><a className={`${styles.navlist}`} href='/#'>Menu 3</a></li>
                <li><a className={`${styles.navlist}`} href='/#'>Menu 4</a></li>
            </ul>
        </nav>
    )
}