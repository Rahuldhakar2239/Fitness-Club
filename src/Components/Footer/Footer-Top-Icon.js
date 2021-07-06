import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import "./Footer-Top-Icon.css";

export default function FooterTop(){
    return (
        <>
            <div className="container-fluid Top-footer">
               <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-10 col-12 mb-2">
                    <div className="top_footer_div_box mt-4">
                        <div className="top_footer_div">
                            <TiLocation className="top_footer_icon" />
                        </div>
                        <p className="top_footer_text" >333 Middle Winchendon Rd,Rindge,NH 03461</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-10 col-12 mb-2">
                    <div className="top_footer_div_box top_footer_div_box2 mt-4">
                        <div className="top_footer_div">
                            <FaMobileAlt className="top_footer_icon" />
                        </div>
                        <p className="top_footer_text" >125-711-811 125-668-886</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-10 col-12 mb-3">
                    <div className="top_footer_div_box top_footer_div_box3 mt-4">
                        <div className="top_footer_div">
                            <FaEnvelope className="top_footer_icon" />
                        </div>
                        <p className="top_footer_text" >gym@gmail.com</p>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}