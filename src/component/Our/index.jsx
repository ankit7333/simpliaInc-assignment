import styles from './our.module.scss'

export default function Our() {

    return(
        <section id="our" className={`section ${styles.our}`}>
            <div className={`container ${styles.our__inner}`}>
                <ul>
                    <li>
                        <a href='/#'>
                            <span>Our vehicles - as demamded by our guests</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <span>Our drivers - professionalism personified</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <span>Our quality promise - of course relaible</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <span>Our planning - relaxed for the event</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <span>Our valet service - relaxed for the event</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <span>Our experience - control the adventure</span>
                            <span className={`${styles.rightarrow}`}>&#8594;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}