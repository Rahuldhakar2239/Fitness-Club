import React from 'react';
import { Link } from 'react-scroll';
import {Link as RouterLink} from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import "./Footer.css";
export default function Footer() {
    return (
        <section className="footer container-fluid">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-10 col-12 mb-5">
                        <div className="footer-logo">
                            <h2 className="fitness">FITNESS<span className="club">Club</span></h2>
                            <p className="club_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus inventore tenetur consequuntur itaque distinctio?</p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.in" target="_blank" rel="noreferrer">
                                    <FaFacebookF className="social_media_icon" />
                                </a>
                                <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                                    <FaTwitter className="social_media_icon" />
                                </a>
                                <a href="https://www.youtube.in" target="_blank" rel="noreferrer">
                                    <FaYoutube className="social_media_icon" />
                                </a>
                                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                    <FaInstagram className="social_media_icon" />
                                </a>
                                <a href="https://www.google.com/gmail" target="_blank" rel="noreferrer">
                                    <FaEnvelope className="social_media_icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-10 col-12 mb-5">
                       <div className="useful_and_support_links">
                       <div className="useful_links_div">
                            <h5>Useful links</h5>
                            <div> <RouterLink className="useful_links" to="/about"> About </RouterLink></div>
                            <div><RouterLink className="useful_links" to="offers"> Offers </RouterLink></div>
                            <div><RouterLink  className="useful_links"to="/about"> Classes </RouterLink></div>
                            <div><RouterLink  className="useful_links" to="/contact"> Contact </RouterLink></div>
                        </div>
                        <div className="support_links_div">
                            <h5>Support</h5>
                            <div> <Link  className="useful_links" > Login </Link></div>
                            <div><Link className="useful_links" > My account </Link></div>
                            <div><Link  className="useful_links" > Subscribe </Link></div>
                            <div><RouterLink  className="useful_links" to="/contact" > Contact </RouterLink></div>
                        </div>
                       </div>
                    </div>
                     
                    <div className="col-lg-4 col-md-4 col-sm-10 col-12">
                    <div className="tips_guides">
                        <h5>Tips & Guides</h5>
                        <div>
                            <Link className="blog1"> Physical fitness may help prevent depression, anxiety</Link>
                        </div>
                        <p className="text-muted"> 3 min read &nbsp; &#124; &nbsp; 20 Comment</p>
                        <div className="new1"></div>
                        <div>
                            <Link className="blog2"> Fitness: The best exercise to lose belly fat and tone up...</Link>
                        </div>
                        <p className="text-muted"> 3 min read &nbsp; &#124; &nbsp; 20 Comment</p>
                    </div>
                    </div>


                </div>

                <hr></hr>
                <div>
                    <p className="footer_rights">FITNESSClub &copy; All rights reserved</p>
                </div>
            </div>


        </section>

    )
}