import styles from './professionalride.module.scss'

export default function Professionalride() {

    return(
        <section id="professionalride" className={`section ${styles.professionalride}`}>
            <div className={`container ${styles.professionalride__inner}`}>
                <h4>BOOK YOUR <br/> PROFESSIONAL RIDE</h4>
                <button className={`button ${styles.button}`}>
                    <span className={`${styles.button__text}`}>Request an exclusive transport service now</span>
                    <span className={`${styles.button__arrow}`}>></span>
                </button>
            </div>
        </section>
    )
}