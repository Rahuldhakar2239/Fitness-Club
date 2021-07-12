import "./training.css"
import { Link } from "react-scroll";
import training1 from "./aboutImages/trainer1.jpg";
import training2 from "./aboutImages/training2.jpg";
import training3 from "./aboutImages/training3.jpg";
import training4 from "./aboutImages/training4.jpg";
import training5 from "./aboutImages/training6.jpg";
export default function Training() {
    return (
        <>

            <div className="container-fluid trainerbg">
            <div className="container trainer mt-5">
                <div className="row mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  ">
                        <h2 className="textTitle">ONE-TO-ONE TRAINING</h2>
                        <p className="training_subtitle_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="aboutpic" src={training1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  ">
                        <h2 className="textTitle">FREESTYLE™ GROUP TRAINING</h2>
                        <p className="training_subtitle_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="aboutpic" src={training2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                        <h2 className="textTitle">GROUP EXERCISE CLASSES</h2>
                        <p className="training_subtitle_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link className="explore_btn" to="about" smooth={true} duration={800}>Explore all our classes</Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="aboutpic" src={training3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  ">
                        <h2 className="textTitle">CARDIO TRAINING</h2>
                        <p className="training_subtitle_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="aboutpic" src={training4} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row mx-auto mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                        <h2 className="textTitle">STRENGTH TRAINING</h2>
                        <p className="training_subtitle_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link className="explore_btn" to="about" smooth={true} duration={800}>Find out more</Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="aboutpic" src={training5} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            </div>

        </>

    )
}