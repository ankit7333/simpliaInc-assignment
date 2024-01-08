// import Image from 'react/image'
import styles from './footer.module.scss'
// import Linkedin from '../../public/images/LinkedIn_White.svg';

export default function Footer() {
    return(
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer__inner} container`}>
                <ul className={`${styles.footer__top}`}>
                    <li>
                        <a className={`${styles.logo}`} href='/#'>LIMOX</a>
                    </li>
                    <li className={`${styles.address}`}>
                        <p>P.O. Box 4621 Arlington, VA 2220</p>
                    </li>
                    <li className={`${styles.address}`}>
                        <p>D.C.(202) 232-4440 Dispatch: (202) 779-6054 Virginia: (703) 979-6664</p>
                    </li>
                    <li className={`${styles.email}`}>
                        <p>Join out list to receive free offerings, discounts, coupons &amp; our useful newsletter.</p>
                        <span className={`${styles.email__box}`}>
                            <input type="text" placeholder="Your email ID" />
                            <button className={`button ${styles.rightarrow}`}>&#8594;</button>
                        </span>
                    </li>
                    <li className={`${styles.social}`}>
                        <ul>
                            <li>
                                <a href='/#'>
                                    <span className={`icon ${styles.social__icon} ${styles.facebook}`} />
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <span className={`icon ${styles.social__icon} ${styles.twitter}`} />
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <span className={`icon ${styles.social__icon} ${styles.linkedin}`} />
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <span className={`icon ${styles.social__icon} ${styles.whatsapp}`} />
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <span className={`icon ${styles.social__icon} ${styles.youtube}`} />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={`${styles.footer__bottom}`}>
                    <p>We would be happy to send you a detailed offer for our extensive driving service immediately. Let yourself be inspired - whether by the airport transfer, shuttle, service, valetparking or our Limox service. We look forward to your call.</p>
                    <p className={`${styles.copyright}`}>Imprint Data protection declaration <br/> Copyright &copy; 2023 LimoX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}