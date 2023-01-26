import "./SearchBox.scss";
import React from "react";

function SearchBox() {
    return (  
        <article className="search-box__flexbox">
            <div className="search-box__input-container">
                <input
                    className="search-box__input"
                    type="text"
                    name="search-box__input"
                    id="search-box__input"
                    placeholder="Enter search term"
                ></input>
            </div>

            <div className="search-box__text-container">
                <p className="search-box__text">
                    SEARCH
                </p>
            </div>
        </article>
    )
}

export default SearchBox