import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import "./contact.css";
import Footer from "../Footer/Footer";
function Contact() {
    return (
        <>
            <section id="contact" className="container-fluid">
                <div className="container">

                    <div className="row py-5">

                        <div className="col-lg-6 col-md-5 col-sm-10 col-12 mb-5">
                            <div>
                                <h6 className="contact_touch">CONTACT US</h6>
                                <h2 className="contact_get_touch"> GET IN TOUCH </h2>
                            </div>
                            <div className="location_div_box mt-5">
                                <div className="location_div">
                                    <TiLocation className="location_icon" />
                                </div>
                                <p className="location_text" >333 Middle Winchendon Rd,Rindge,NH 03461</p>
                            </div>

                            <div className="location_div_box mt-4">
                                <div className="location_div">
                                    <FaMobileAlt className="location_icon" />
                                </div>
                                <p className="location_text" >125-711-811 125-668-886</p>
                            </div>

                            <div className="location_div_box mt-4">
                                <div className="location_div">
                                    <FaEnvelope className="location_icon" />
                                </div>
                                <p className="location_text" >gymcenter@gmail.com</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-7 col-sm-10 col-12">
                            <div className="contact_form">
                                <form action="" method="post">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                    <input type="text" name="website" id="website" placeholder="Website" />
                                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Comment"></textarea>
                                    <input type="submit" value="SUBMIT" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Contact;