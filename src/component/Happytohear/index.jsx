import styles from './happytohear.module.scss'

export default function Happytohear() {

    return(
        <section id="happytohear" className={`section ${styles.happytohear}`}>
            <div className={`container ${styles.happytohear__inner}`}>
                <h4>We are happy to hear from you. <br/> Limousine service, airport transfer, <br/> shuttle service</h4>
                <button className={`button ${styles.button}`}>
                    <span className={`${styles.button__text}`}>Request an exclusive LimoX now</span>
                    <span className={`${styles.button__arrow}`}>></span>
                </button>
            </div>
        </section>
    )
}