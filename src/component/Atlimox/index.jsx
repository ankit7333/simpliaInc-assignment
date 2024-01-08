import styles from './atlimox.module.scss'

export default function Atlimox() {

    return(
        <section id="atlimox" className={`section ${styles.atlimox}`}>
            <div className={`container ${styles.atlimox__inner}`}>
                <h4>AT LimoX WE HAVE <br/> THE BEST FLEET OPTIONS</h4>
                <p>Not only customers from Europe but from all over the world trust LimoX service</p>
                <ul>
                    <li>
                        <a href='/'>
                            <span className={`${styles.logo} ${styles.volkswagen}`} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <span className={`${styles.logo} ${styles.bmw}`} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <span className={`${styles.logo} ${styles.audi}`} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <span className={`${styles.logo} ${styles.mercedes}`} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}