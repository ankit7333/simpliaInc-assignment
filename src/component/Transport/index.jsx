import styles from './transport.module.scss'

export default function Transport() {

    return(
        <section id="transport" className={`section ${styles.transport}`}>
            <div className={`container ${styles.transport__inner}`}>
                <h4>Driving service <br/> Limousine service <br/> Airport transfer</h4>
                <p>Enrich your mobility with our <br/> high-quality shuttle service.</p>
            </div>
        </section>
    )
}