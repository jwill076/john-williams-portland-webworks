import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
import ServiceLinks from "../../components/ServiceLinks/ServiceLinks";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import CalendarEvents from "../../components/CalendarEvents/CalendarEvents";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <main>
            <Header />

            <Hero />

            <Cards />

            <ServiceLinks />

            <article className="flexbox">
                <RecentUpdates />

                <CalendarEvents />
            </article>

            <Footer />
        </main>
    );
}

export default Home