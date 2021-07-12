import React, { useState } from "react";
import "./Offers_card.css";
import "..//PopUp/PopUp.css";
import Account from "../PopUp/PopUp";
export default function Card(props) {
const [Wrapper, SetWrapper] = useState(false);

    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-8 col-12  mt-5">
                <div className="card price_card mb-5">
                    <h4 style={{transform: "skewY(5deg)" }}>{props.period}</h4>
                    <h2 style={{ color: "orangered", fontSize: "40px",transform: "skewY(5deg)" }} ><span>&#36;</span> {props.amount} </h2>
                    <h6 style={{ fontSize: "12px",transform: "skewY(5deg)" }} >SINGLE CLASS</h6>
                    <p className="d-flex justify-content-center price_card_points"> Free riding </p>
                    <p className="d-flex justify-content-center price_card_points"> Unlimited equipments </p>
                    <p className="d-flex justify-content-center price_card_points"> personal trainer </p>
                    <p className="d-flex justify-content-center price_card_points"> Weight losing classes </p>
                    <p className="d-flex justify-content-center price_card_points"> Month to mouth </p>
                    <p className="d-flex justify-content-center price_card_points">  No time restriction </p>
                    <button className="enrollNow_btn mb-4"onClick={() => SetWrapper(true)}>Enroll Now</button>
                </div>
            </div>
            <Account wrapperValue={Wrapper} SetWrapperValue={SetWrapper}/>
        </>

    )
}