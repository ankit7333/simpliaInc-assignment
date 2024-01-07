import styles from './atlimox.module.scss'

export default function Atlimox() {

    return(
        <section id="atlimox" className={`section ${styles.atlimox}`}>
            <div className={`container ${styles.atlimox__inner}`}>
                <h4>AT LimoX WE HAVE <br/> THE BEST FLEET OPTIONS</h4>
                <p>Not only customers from Europe but from all over the world trust LimoX service</p>
                <ul>
                    <li>
                        <a className={`${styles.logo} ${styles.volkswagen}`} href='/#'></a>
                    </li>
                    <li>
                        <a className={`${styles.logo} ${styles.bmw}`} href='/#'></a>
                    </li>
                    <li>
                        <a className={`${styles.logo} ${styles.audi}`} href='/#'></a>
                    </li>
                    <li>
                        <a className={`${styles.logo} ${styles.mercedes}`} href='/#'></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}