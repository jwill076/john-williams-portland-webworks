import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
import ServiceLinks from "../../components/ServiceLinks/ServiceLinks";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import CalendarEvents from "../../components/CalendarEvents/CalendarEvents";
import Footer from "../../components/Footer/Footer";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Searchbox from "../../components/SearchBox/SearchBox";

function Home() {
    return (
        <main className="home">
            <Header />
            <Searchbox />
            <DropdownMenu />
            <Hero />
            <Cards />
            <ServiceLinks />
            <RecentUpdates />
            <CalendarEvents />
            <Footer />
        </main>
    );
}

export default Home