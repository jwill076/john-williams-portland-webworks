import "./ServiceLinks.scss";
import React from "react";

function ServiceLinks() {
    return (
        <article className="links">
            <section className="links__title-container">
                <h2 className="links__title">
                    POPULAR SERVICES AND LINKS
                </h2>
            </section>

            <section className="links__flexbox">
                <div className="flexbox__container">
                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Overview and History of the South Carolina State Budget
                        </p>
                    </a>

                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Employer Contribution Trends
                        </p>
                    </a>

                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Appropriation Bills and Acts
                        </p>
                    </a>
                </div>

                <div className="flexbox__container">
                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Overview and History of the South Carolina State Budget
                        </p>
                    </a>

                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Employer Contribution Trends - June 4, 2019
                        </p>
                    </a>

                    <a className="container__anchor2" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Executive Budget Office
                        </p>

                        <p className="container__anchor-text">
                            State Agency Budget Plans(Requests)
                        </p>
                    </a>
                </div>
                
                <div className="flexbox__container">
                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Overview and History of the South Carolina State Budget
                        </p>
                    </a>

                    <a className="container__anchor" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Employer Contribution Trends - June 4, 2019
                        </p>
                    </a>

                    <a className="container__anchor2" href="https://www.example.com/">
                        <p className="container__anchor-text">
                            Executive Budget Office                       </p>

                        <p className="container__anchor-text">
                            State Agency Budget Plans(Requests)
                        </p>
                    </a>
                </div>
            </section>
        </article>
    )
}

export default ServiceLinks