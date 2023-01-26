import SearchIcon from "../../assets/icons/blue-search.png";
import "./Hero.scss";
import React from "react";

function Hero() {
    return (
        <article className="hero">
            <section className="hero__background-image">
                <div className="hero__search-info">
                    <div className="search-info__text-container">
                        <p className="search-info__text">
                            Providing independent research, analysis,
                            and resources to facilitate informed policy
                            decisions and administration of services
                        </p>
                    </div>

                    <div className="search-info__flexbox">
                        <div className="flexbox__input-container">
                            <input
                                className="flexbox__input"
                                type="text"
                                name="flexbox__input"
                                id="flexbox__input"
                                placeholder="Search rfa.sc.gov"
                            ></input>
                        </div>

                        <div className="flexbox__search-button">
                            <div className="search-button__text-container">
                                <p className="search-button__text">
                                    SEARCH
                                </p>
                            </div>

                            <div className="search-button__image-container">
                                <img
                                    className="search-button__image"
                                    src={SearchIcon}
                                    alt="Search Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Hero