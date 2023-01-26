import "./DropdownMenu.scss";
import React from "react";

function DropdownMenu() {
    return (
        <article className="container2__flexbox">
            <section className="container2__flexbox1">
                <div className="flexbox1__tabs">
                    <div className="tabs__text-container">
                        <p className="tabs__text underline">
                            Home
                        </p>
                    </div>

                    <div className="tabs__text-container">
                        <p className="tabs__text underline">
                            News & Events
                        </p>
                    </div>
                    
                    <div className="tabs__text-container">
                        <p className="tabs__text underline">
                            About Us
                        </p>
                    </div>
                    
                    <div className="tabs__text-container">
                        <p className="tabs__text underline">
                            Contact Us
                        </p>
                    </div>
                    
                    <div className="tabs__text-container">
                        <p className="tabs__text">
                            Boards & Committees
                        </p>
                    </div>
                </div>
            </section>

            <section className="container2__flexbox2">
                <div className="flexbox2__column">
                    <div className="column__info">
                        <h3 className="info__title">
                            DATA & RESEARCH
                        </h3>

                        <div className="info__underline">

                        </div>

                        <div className="info__data">
                            <p className="data__text">
                                Economy
                            </p>

                            <p className="data__text">
                                State Finances
                            </p>

                            <p className="data__text">
                                Education
                            </p>
                            
                            <p className="data__text">
                                Healthcare
                            </p>
                            
                            <p className="data__text">
                                Local Government
                            </p>
                            
                            <p className="data__text">
                                Population and Demographics
                            </p>
                            
                            <p className="data__text">
                                State Register Calculations
                            </p>
                            
                            <p className="data__text">
                                Presentations
                            </p>
                        </div>
                    </div>

                    <div className="column__info">
                        <h3 className="info__title">
                            LEGISLATIVE FISCAL IMPACTS
                        </h3>

                        <div className="info__underline">

                        </div>

                        <div className="info__data">
                            <p className="data__text">
                                Current General Assembly Session
                            </p>

                            <p className="data__text">
                                Previous General Assembly Session
                            </p>

                            <p className="data__text">
                                Forms
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flexbox2__column">
                    <div className="column__info">
                        <h3 className="info__title">
                            GEOGRAPHY & MAPPING
                        </h3>

                        <div className="info__underline">

                        </div>

                        <div className="info__data">
                            <p className="data__text">
                                Transportation Carrier Network (Uber)
                            </p>

                            <p className="data__text">
                                SC Real Time Network
                            </p>

                            <p className="data__text">
                                SC State GIS
                            </p>
                            
                            <p className="data__text">
                                Maps
                            </p>
                            
                            <p className="data__text">
                                Interactive Mapping
                            </p>
                            
                            <p className="data__text">
                                Statewide Aerial Imagery
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flexbox2__column">
                    <div className="column__info">
                        <h3 className="info__title">
                            PROGRAMS & SERVICES
                        </h3>

                        <div className="info__underline">

                        </div>

                        <div className="info__data">
                            <p className="data__text">
                                Precinct Demographics and Redistricting
                            </p>

                            <p className="data__text">
                                State 911 Program
                            </p>

                            <p className="data__text">
                                Data Services and Online Solutions
                            </p>
                            
                            <p className="data__text">
                                Geodetic Survey
                            </p>
                            
                            <p className="data__text">
                                Fiscal Analysis
                            </p>
                            
                            <p className="data__text">
                                2020 Census
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default DropdownMenu