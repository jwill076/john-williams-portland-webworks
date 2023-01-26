import AddressIcon from "../../assets/icons/location-icon.png";
import TimeIcon from "../../assets/icons/clock-icon.png";
import PhoneNumberIcon from "../../assets/icons/number-icon.png";
import UpArrowIcon from "../../assets/icons/up-arrow-icon.png";
import "./CalendarEvents.scss";
import React from "react";

function CalendarEvents() {
    return (
        <section className="calendar-events">
            <h2 className="calendar-events__title">
                Calendar of Events
            </h2>
            
            <div className="calendar-events__underline">

            </div>

            <div className="calendar-events__container">
                <div className="container__flexbox">
                    <div className="flexbox__date-container">
                        <div className="flexbox__date">
                            <p className="date__month">
                                NOV
                            </p>

                            <p className="date__day">
                                22
                            </p>
                        </div>

                        <div className="flexbox__white-box">
                        
                        </div>
                    </div>

                    <div className="flexbox__info">
                        <div className="info__status">
                            <p className="info__status-updated">
                                Updated
                            </p>
                        </div>

                        <h4 className="info__title">
                            Board of Economic Advisors Meeting
                        </h4>

                        <div className="info__address">
                            <div className="address__icon-container">
                                <img
                                    className="address__icon"
                                    src={AddressIcon}
                                    alt="Address Icon"
                                />
                            </div>

                            <div className="address__text-container">
                                <p className="address__text">
                                    Room 417, Bowers Conference Room, Rembert Dennis Building
                                </p>
                            </div>
                        </div>

                        <div className="info__time">
                            <div className="time__icon-container">
                                <img
                                    className="time__icon"
                                    src={TimeIcon}
                                    alt="Time Icon"
                                />
                            </div>
 
                            <div className="time__text-container">
                                <p className="time__text">
                                    1:30 pm
                                </p>
                            </div>
                        </div>

                        <div className="info__phone-number underline">
                            <div className="phone-number__image-container">
                                <img
                                    className="phone-number__image"
                                    src={PhoneNumberIcon}
                                    alt="Phone Number Icon"
                                />
                            </div>

                            <div className="phone-number__text-container">
                                <p className="phone-number__text">
                                    (803) 734-2265
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__date-container">
                        <div className="flexbox__date">
                            <p className="date__month">
                                NOV
                            </p>

                            <p className="date__day">
                                23
                            </p>
                        </div>

                        <div className="flexbox__white-box">
                        
                        </div>
                    </div>

                    <div className="flexbox__info">
                        <div className="info__status">
                            <p className="info__status-cancelled">
                                Cancelled
                            </p>
                        </div>

                        <h4 className="info__title">
                            Board of Economic Advisors Meeting
                        </h4>

                        <div className="info__address">
                            <div className="address__icon-container">
                                <img
                                    className="address__icon"
                                    src={AddressIcon}
                                    alt="Address Icon"
                                />
                            </div>

                            <div className="address__text-container">
                                <p className="address__text">
                                    Room 417, Bowers Conference Room, Rembert Dennis Building
                                </p>
                            </div>
                        </div>

                        <div className="info__time">
                            <div className="time__icon-container">
                                <img
                                    className="time__icon"
                                    src={TimeIcon}
                                    alt="Time Icon"
                                />
                            </div>
 
                            <div className="time__text-container">
                                <p className="time__text">
                                    1:30 pm
                                </p>
                            </div>
                        </div>

                        <div className="info__phone-number underline">
                            <div className="phone-number__image-container">
                                <img
                                    className="phone-number__image"
                                    src={PhoneNumberIcon}
                                    alt="Phone Number Icon"
                                />
                            </div>

                            <div className="phone-number__text-container">
                                <p className="phone-number__text">
                                    (803) 734-2265
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__date-container">
                        <div className="flexbox__date">
                            <p className="date__month">
                                NOV
                            </p>

                            <p className="date__day">
                                25
                            </p>
                        </div>

                        <div className="flexbox__white-box">
                        
                        </div>
                    </div>

                    <div className="flexbox__info">
                        <h4 className="info__title">
                            Board of Economic Advisors Meeting
                        </h4>

                        <div className="info__address">
                            <div className="address__icon-container">
                                <img
                                    className="address__icon"
                                    src={AddressIcon}
                                    alt="Address Icon"
                                />
                            </div>

                            <div className="address__text-container">
                                <p className="address__text">
                                    Room 417, Bowers Conference Room, Rembert Dennis Building
                                </p>
                            </div>
                        </div>

                        <div className="info__time">
                            <div className="time__icon-container">
                                <img
                                    className="time__icon"
                                    src={TimeIcon}
                                    alt="Time Icon"
                                />
                            </div>
 
                            <div className="time__text-container">
                                <p className="time__text">
                                    1:30 pm
                                </p>
                            </div>
                        </div>

                        <div className="info__phone-number underline">
                            <div className="phone-number__image-container">
                                <img
                                    className="phone-number__image"
                                    src={PhoneNumberIcon}
                                    alt="Phone Number Icon"
                                />
                            </div>

                            <div className="phone-number__text-container">
                                <p className="phone-number__text">
                                    (803) 734-2265
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container__flexbox">
                    <div className="flexbox__date-container">
                        <div className="flexbox__date">
                            <p className="date__month">
                                NOV
                            </p>

                            <p className="date__day">
                                28
                            </p>
                        </div>

                        <div className="flexbox__white-box">
                        
                        </div>
                    </div>

                    <div className="flexbox__info">
                        <h4 className="info__title">
                            Board of Economic Advisors Meeting
                        </h4>

                        <div className="info__address">
                            <div className="address__icon-container">
                                <img
                                    className="address__icon"
                                    src={AddressIcon}
                                    alt="Address Icon"
                                />
                            </div>

                            <div className="address__text-container">
                                <p className="address__text">
                                    Room 417, Bowers Conference Room, Rembert Dennis Building
                                </p>
                            </div>
                        </div>

                        <div className="info__time">
                            <div className="time__icon-container">
                                <img
                                    className="time__icon"
                                    src={TimeIcon}
                                    alt="Time Icon"
                                />
                            </div>
 
                            <div className="time__text-container">
                                <p className="time__text">
                                    1:30 pm
                                </p>
                            </div>
                        </div>

                        <div className="info__phone-number">
                            <div className="phone-number__image-container">
                                <img
                                    className="phone-number__image"
                                    src={PhoneNumberIcon}
                                    alt="Phone Number Icon"
                                />
                            </div>

                            <div className="phone-number__text-container">
                                <p className="phone-number__text">
                                    (803) 734-2265
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="calendar-events__button">
                <p className="button__text">
                    VIEW ALL EVENTS
                </p>
            </div>

            <section className="calendar-events__up-button">
                <div className="up-button__text-container">
                    <p className="up-button__text">
                        Back to Top
                    </p>
                </div>

                <div className="up-button__icon-container">
                    <img
                        className="up-button__icon"
                        src={UpArrowIcon}
                        alt="Up Arrow Icon"
                    />
                </div>
            </section>
        </section>
    )
}

export default CalendarEvents