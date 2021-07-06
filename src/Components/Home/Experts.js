import "./Experts.css";
import ex1 from "../../Images/Expert1.jpg";
import ex2 from "../../Images/Expert2.jpg";
import ex3 from "../../Images/Expert3.jpg";
import {Link} from "react-router-dom";
export default function Expert() {
    return (
        <>
            <div className="container trainer mt-4" id="Experts">
                <div className="row mx-auto mt-5">

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-5 ">
                        <h6 className="our_team"> OUR TEAM</h6>
                        <h2 className="train_expert"> TRAIN WITH EXPERTS </h2>

                        <p style={{ color: "white" }} className="mb-5 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                           <div style={{textAlign:"center"}}> <Link className="learn_more_btn" to="/about"> Learn More </Link></div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 col-12">
                        <div className="card mb-5 expert_card">
                        
                            <div id="mycontainer" className="carousel slide carousel-fade" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li style={{ height:"4px"}} data-target="#mycontainer" data-slide-to="0" className="active"></li>
                                    <li style={{height:"4px"}} data-target="#mycontainer" data-slide-to="1"></li>
                                    <li style={{height:"4px"}} data-target="#mycontainer" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="2000">
                                        <img src={ex1} className="d-block w-100 expert_image" alt="" />

                                        <div className="carousel-caption">
                                            <h3 className="expert_name">Athart Rachel </h3>
                                        </div>

                                    </div>
                                    <div className="carousel-item" data-interval="2000">
                                        <img src={ex2} className="d-block w-100 expert_image" alt="" />
                                        <div className="carousel-caption">
                                            <h3 className="expert_name">Athart Rachel </h3>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="2000">
                                        <img src={ex3} className="d-block w-100 expert_image" alt="" />
                                        <div className="carousel-caption">
                                            <h3 className="expert_name">Athart Rachel </h3>
                                        </div>
                                    </div>
                                </div>
                                <a href="#mycontainer" className="carousel-control-prev" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a href="#mycontainer" className="carousel-control-next" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}