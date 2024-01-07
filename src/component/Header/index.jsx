import styles from './header.module.scss'
import Nav from '../Nav'

export default function Header() {
    return(
        <header className={`${styles.header}`}>
            <div className={`${styles.header__inner} container`}>
                <div className={`${styles.header__left}`}>
                    <a className={`${styles.logo}`} href='/#'>LIMOX</a>
                </div>
                <div className={`${styles.header__right}`}>
                    <Nav />
                </div>
            </div>
        </header>
    )
}