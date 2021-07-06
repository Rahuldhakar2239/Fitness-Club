import React from 'react';
import { Link } from "react-scroll";
import Card from "./Offers_card";
import "./offer.css";
import Footer from "../Footer/Footer";
import FooterTop from "../Footer/Footer-Top-Icon";
export default function Offers() {
    return (
        <>
            <section id="offers">
                <div className="offers_title">
                    <div>
                        <h1 className="offers_title-h1">Registration Now To Get More Deals</h1>
                        <h5 className="subtitle mb-4">where health, beauty and fitness meet</h5>
                        <Link className="joinUs_btn" to="Offers_card" smooth={true} duration={800}> Jion us </Link>
                    </div>
                </div>
            </section>

            <section id="Offers_card">
                <div className="container-fluid offers_container">
                    <div className="row mx-auto ">
                        <div className="container-fluid mx-auto mb-5">
                        <p className="price_subtitle mt-5"> OUR PLAN </p>
                            <h3 className="price_title">CHOOSE YOUR PRICING PLAN</h3>
                            <div className="row mt-4">

                                <Card amount={"20.0"} period={"Two days demo"} />
                                <Card amount={"35.0"} period={"Class drop-in"} />
                                <Card amount={"45.0"} period={"3 Months unlimited"} />
                                <Card amount={"59.0"} period={"6 Months unlimited"} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterTop/>
            <Footer/>
        </>
    )
}