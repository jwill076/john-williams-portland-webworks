import TransparentLogoIcon from "../../assets/logos/transparent-rfa-logo.png";
import "./Footer.scss";
import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__title-logo-container">
                <div className="footer__title-container">
                    <h5 className="footer__title">
                        South Carolina
                    </h5>

                    <h5 className="footer__title">
                        Revenue and Fiscal Affairs Office
                    </h5>
                </div>

                <div className="footer__logo-container">
                    <img
                        className="footer__logo"
                        src={TransparentLogoIcon}
                        alt="Transparent Logo Icon"
                    />
                </div>
            </section>

            <section className="footer__text-container">
                <p className="footer__text">
                    Privacy Statement
                </p>

                <p className="footer__text">
                    FOIA
                </p>

                <p className="footer__text">
                    Disclosures and Reporting
                </p>

                <p className="footer__text">
                    Report Fraud
                </p>

                <p className="footer__text">
                    Accessibility
                </p>

                <p className="footer__text">
                    Contact Us
                </p>
            </section>

            <section className="footer__info-container">
                <div className="footer__info">
                    <h6 className="info__title">
                        MAIN OFFICE
                    </h6>

                    <div className="info__text-container">
                        <p className="info__text">
                            1000 Assembly St, Rembert Dennis Building, Suite 421
                        </p>

                        <p className="info__text">
                            Columbia, SC 29201
                        </p>
                    </div>
                </div>

                <div className="footer__info">
                    <h6 className="info__title">
                        GEODETIC SURVEY SECTION
                    </h6>

                    <div className="info__text-container">
                        <p className="info__text">
                            5 Geology Rd
                        </p>

                        <p className="info__text">
                            Columbia, SC 29201
                        </p>
                    </div>
                </div>

                <div className="footer__info">
                    <h6 className="info__title">
                        HEALTH AND DEMOGRAPHICS DIVISION
                    </h6>

                    <div className="info__text-container">
                        <p className="info__text">
                            1000 Assembly St, Rembert Dennis Building, Suite 240
                        </p>

                        <p className="info__text">
                            Columbia, SC 29201
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer