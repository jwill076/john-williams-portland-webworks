import RFA_Logo from "../../assets/logos/rfa-logo.png";
import SearchIcon from "../../assets/icons/light-blue-search.png";
import "./Header.scss";
import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import SearchBox from "../SearchBox/SearchBox";

class Header extends React.Component{

    toggleMenu() {
        document.getElementById("flexbox__container2").classList.toggle("show-or-not-to-show");
    }

    toggleSearchBox() {
        document.getElementById("nav-bar__search-box").classList.toggle("show-or-not-to-show");
    }

    render() {
        return(
            <header className="header">
                <article className="header__flexbox">
                    <section className="flexbox__container1">
                        <section className="container1__flexbox1" onClick={this.toggleMenu}>
                            <div className="flexbox1__image-container"></div>
                            <div className="flexbox1__image-container"></div>
                            <div className="flexbox1__image-container"></div>

                            <div className="flexbox1__text-container">
                                <p className="flexbox1__text">
                                    MENU
                                </p>
                            </div>
                        </section>

                        <section className="container1__flexbox2">
                            <section className="flexbox2__title-info">
                                <div className="title-info__image-container">
                                    <img
                                        className="title-info__image"
                                        src={RFA_Logo}
                                        alt="RFA Logo"
                                    />
                                </div>

                                <div className="title-info">
                                    <h1 className="title-info__title">
                                        SOUTH CAROLINA
                                    </h1>

                                    <h1 className="title-info__title">
                                        REVENUE AND FISCAL AFFAIRS OFFICE
                                    </h1>
                                    
                                    <p className="title-info__text">
                                        Transforming data into solutuions for South Carolina
                                    </p>
                                </div>
                            </section>

                            <section className="flexbox2__nav-bar">
                                <div className="nav-bar__flexbox">
                                    <div className="flexbox__text-container1">
                                        <p className="flexbox__text">
                                            ABOUT US
                                        </p>
                                    </div>

                                    <div className="flexbox__text-container2">
                                        <p className="flexbox__text">
                                            EVENTS
                                        </p>
                                    </div>

                                    <div className="flexbox__text-container3">
                                        <p className="flexbox__text">
                                            BOARDS & COMMITTEES
                                        </p>
                                    </div>

                                    <div className="flexbox__search">
                                        <div className="search__icon-container" onClick={this.toggleSearchBox}>
                                            <img
                                                className="search__icon"
                                                src={SearchIcon}
                                                alt="Search Icon"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="nav-bar__search-box">
                                    <SearchBox />
                                </div>
                            </section>
                        </section>
                    </section>

                    <section className="flexbox__container2">
                        <DropdownMenu />
                    </section>
                </article>
            </header>
        )
    }
}

export default Header