import "./RecentUpdates.scss";
import React from "react";

function RecentUpdates() {
    return (
        <section className="recent-updates">
            <h2 className="recent-updates__title">
                Recent Updates
            </h2>
            
            <div className="recent-updates__underline">

            </div>

            <div className="recent-updates__container">
                <div className="container__flexbox">
                    <div className="flexbox__title-container">
                        <a className="flexbox__title-anchor" href="https://www.example.com/">
                            <p className="flexbox__title">
                                Local Government Finance
                            </p>
                        </a>
                    </div>
                    
                    <div className="flexbox__text-container">
                        <p className="flexbox__text">
                            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreer sodales
                        </p>
                    </div>
                    
                    <div className="flexbox__status">
                        <div className="status__date-published-label">
                            <p className="status__date-published-text">
                                Published:
                            </p>
                        </div>
                
                        <div className="status__date-published-container">
                            <p className="status__date-published">
                                Jan 2, 2020
                            </p>
                        </div>
                        
                        <div className="status__update-container">
                            <p className="status__update-text">
                                Updated
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__title-container">
                        <a className="flexbox__title-anchor" href="https://www.example.com/">
                            <p className="flexbox__title">
                                Transportation Network Carrier Maps
                            </p>
                        </a>
                    </div>
                    
                    <div className="flexbox__status">
                        <div className="status__date-published-label">
                            <p className="status__date-published-text">
                                Published:
                            </p>
                        </div>
                
                        <div className="status__date-published-container">
                            <p className="status__date-published">
                                Jan 2, 2020
                            </p>
                        </div>
                        
                        <div className="status__update-container">
                            <p className="status__update-text">
                                New
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__title-container">
                        <a className="flexbox__title-anchor" href="https://www.example.com/">
                            <p className="flexbox__title">
                                BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23
                            </p>
                        </a>
                    </div>
                    
                    <div className="flexbox__text-container">
                        <p className="flexbox__text">
                            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreer sodales
                        </p>
                    </div>
                    
                    <div className="flexbox__status">
                        <div className="status__date-published-label">
                            <p className="status__date-published-text">
                                Published:
                            </p>
                        </div>
                
                        <div className="status__date-published-container">
                            <p className="status__date-published">
                                Dec 16, 2019
                            </p>
                        </div>
                        
                        <div className="status__update-container">
                            <p className="status__update-text">
                                Updated
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__title-container">
                        <a className="flexbox__title-anchor" href="https://www.example.com/">
                            <p className="flexbox__title">
                                Budget Development
                            </p>
                        </a>
                    </div>
                    
                    <div className="flexbox__status">
                        <div className="status__date-published-label">
                            <p className="status__date-published-text">
                                Published:
                            </p>
                        </div>
                
                        <div className="status__date-published-container">
                            <p className="status__date-published">
                                Dec 16, 2019
                            </p>
                        </div>
                        
                        <div className="status__update-container">
                            <p className="status__update-text">
                                New
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__title-container">
                        <a className="flexbox__title-anchor" href="https://www.example.com/">
                            <p className="flexbox__title">
                                November 2019 General Fund Revenue Digest
                            </p>
                        </a>
                    </div>
                    
                    <div className="flexbox__status">
                        <div className="status__date-published-label">
                            <p className="status__date-published-text">
                                Published:
                            </p>
                        </div>
                
                        <div className="status__date-published-container">
                            <p className="status__date-published">
                                Dec 13, 2019
                            </p>
                        </div>
                        
                        <div className="status__update-container">
                            <p className="status__update-text">
                                New
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recent-updates__button">
                <p className="button__text">
                    VIEW MORE
                </p>
            </div>
        </section>
    )
}

export default RecentUpdates