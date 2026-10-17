import React from "react";
import Header from "../components/landing_page_header";
import Footer from "../components/landing_page_footer";
import { Outlet } from "react-router-dom";
export default function LandingPageLayout(){
    return(
        <>
            <nav>
                <Header/>
            </nav>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}