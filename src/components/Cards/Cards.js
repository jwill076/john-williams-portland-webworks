import DataResearchIcon from "../../assets/icons/Data-Research-Icon.svg";
import GeoMappingIcon from "../../assets/icons/Geography-Icon.svg";
import ProgramsServicesIcon from "../../assets/icons/Programs-Icon.svg";
import FiscalImpactsIcon from "../../assets/icons/Legislative-Icon.svg";
import "./Cards.scss";
import React from "react";

function Cards() {
    return (
        <article className="cards">
            <section className="cards__background">
                <div className="cards__flexbox">
                    <div className="cards__container">
                        <div className="cards__image-container">
                            <img
                                className="cards__image"
                                src={DataResearchIcon}
                                alt="Data Research Icon"
                            />
                        </div>

                        <div className="cards__title-container">
                            <h4 className="cards__title">
                                DATA & RESEARCH
                            </h4>
                        </div>
                    </div>

                    <div className="cards__container">
                        <div className="cards__image-container">
                            <img
                                className="cards__image"
                                src={GeoMappingIcon}
                                alt="Geo Mapping Icon"
                            />
                        </div>

                        <div className="cards__title-container">
                            <h4 className="cards__title">
                                GEOGRAPHY & MAPPING
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="cards__flexbox">
                    <div className="cards__container">
                        <div className="cards__image-container">
                            <img
                                className="cards__image"
                                src={ProgramsServicesIcon}
                                alt="Programs Services Icon"
                            />
                        </div>

                        <div className="cards__title-container">
                            <h4 className="cards__title">
                                PROGRAMS & SERVICES
                            </h4>
                        </div>
                    </div>

                    <div className="cards__container">
                        <div className="cards__image-container">
                            <img
                                className="cards__image"
                                src={FiscalImpactsIcon}
                                alt="Fiscal Impacts Icon"
                            />
                        </div>

                        <div className="cards__title-container">
                            <h4 className="cards__title">
                                LEGISLATIVE FISCAL IMPACTS
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Cards