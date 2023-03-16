import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/footer.module.css"
import contact from "../../data/profile.json"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow"
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
    const social = contact.social_media
    const info = contact.contact_information

    return (
        <footer className={styles.footer}>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <div className="uk-margin">
                                <Link to="/">
                                    <StaticImage
                                        src="../images/krave-logo-full.png"
                                        alt="Krave Nutrition Anaheim Logo"
                                        width={160}
                                    />
                                </Link>

                            </div>

                            <div className="uk-width-xlarge footer__icons">
                                <div className="editable">
                                    <p>Krave Nutrition is a Healthy Beverage Bar that serves drinks which not only satisfies your taste buds, it also hits the requirements to fuel your body with the best nutrition! Here at Krave we serve a Healthy Meal Combo! </p>
                                </div>
                                <a href={social.facebook} target="_blank" rel="noopener"><FaFacebook /></a>
                                <a href={social.instagram} target="_blank" rel="noopener"><FaInstagram /></a>
                            </div>
                        </div>

                        <div className="uk-width-1-4@s">
                            <h2 className="uk-h3">Contact</h2>
                            <ul className="uk-list footer__icons">
                                <li class="uk-margin-medium-bottom"><a href={`tel: ${info.office}`}><FaPhoneAlt /> {info.office}</a></li>
                                <li class="uk-margin-medium-bottom"><a href={`mailto: ${info.email}`}><FaRegEnvelope /> {info.email}</a></li>
                                <li class="uk-margin-medium-bottom"><a href="https://goo.gl/maps/LQb3gUybZSZTDFfR9" target="_blank"><FaLocationArrow /> {info.address}, {info.city}, {info.state} {info.zip_code}</a></li>
                            </ul>
                        </div>
                        <div className="uk-width-1-4@s">
                            <div className="editable">
                            <h2 className="uk-h3">Hours</h2>
                            <p>
                                Mon-Fri: 7am-4pm<br/>
                                Sat: 8am-2pm<br/>
                                Sun: Closed
                            </p>
                            </div>
                        </div>
                    </div><div className="uk-grid-column-large uk-margin-xlarge uk-grid" uk-grid>
                        <div className="uk-grid-item-match uk-flex-bottom uk-width-1-2@s">
                            <div className="uk-panel uk-width-1-1">
                                <p>&copy; Copyright {new Date().getFullYear()} &middot; Built by <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram Web Design</Link></p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}