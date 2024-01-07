import styles from './bookexclusive.module.scss'

export default function Bookexclusive() {

    return(
        <section id="bookexclusive" className={`section ${styles.bookexclusive}`}>
            <div className={`container ${styles.bookexclusive__inner}`}>
                <h4>BOOK EXCUSIVE <br/> CHAUFFER SERVICES</h4>
                <button className={`button ${styles.button}`}>
                    <span className={`${styles.button__text}`}>Request an exclusive LimoX now</span>
                    <span className={`${styles.button__arrow}`}>></span>
                </button>
            </div>
        </section>
    )
}