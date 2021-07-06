import "./home.css";
import { Link } from "react-scroll";
import {CgGym} from 'react-icons/cg';
import {GiHeartBeats} from 'react-icons/gi';
import {GiMilkCarton} from 'react-icons/gi';
import {GiUnicycle} from 'react-icons/gi';
import Expert from "./Experts";
import FooterTop from "../Footer/Footer-Top-Icon";
import Footer from "../Footer/Footer";
function Home() {
    return (
        <>
            <section className="banner" id="home">
                <div className="home_title">
                    <div>
                        <h1 className="strong_title">BE <span style={{ color: "orangered" }}>STRONG</span> TRAINING HARD</h1>
                        <h5 className="subtitle mb-4">SHAPE YOUR BODY</h5>
                        <Link className="get_start_btn" to="home" smooth={true} duration={800}> get started </Link>
                    </div>
                </div>
            </section>

            
            <div className="container-fluid Icons_container">
                <div className="row  mx-auto ">
                    <div className="container mx-auto">

                    <h6 className="choose_us">WHY CHOOSE US ?</h6>
                    <h2 className="limit_forward"> PUSH YOUR LIMIT FORWARDS </h2>

                        <div className="row mt-4">

                            <div className="col-lg-3 col-md-6 col-sm-10 col-12  mt-5">
                                <div className="card Icon_card mb-5">
                                <div className="icon_div">
                                    <CgGym className="cggym_icon"/>
                                </div>
                                <h4 className="card-title" style={{color:"white",padding:"10px" , textAlign:"center"}}> Proffesponal training plan </h4>
                                <p className="card-subtitle" style={{color:"whitesmoke" ,padding:"6px" , textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-10 col-12  mt-5">
                                <div className="card Icon_card mb-5">
                                <div className="icon_div">
                                    <GiHeartBeats className="cggym_icon"/>
                                </div>
                                <h4 className="card-title" style={{color:"white",padding:"10px" , textAlign:"center"}}> Unique to your needs </h4>
                                <p className="card-subtitle" style={{color:"whitesmoke" ,padding:"6px" , textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-10 col-12  mt-5">
                                <div className="card Icon_card mb-5">
                                <div className="icon_div">
                                    <GiMilkCarton className="cggym_icon"/>
                                </div>
                                <h4 className="card-title" style={{color:"white",padding:"10px" , textAlign:"center"}}> Healthy nutrition plan </h4>
                                <p className="card-subtitle" style={{color:"whitesmoke" ,padding:"6px" , textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-10 col-12  mt-5">
                                <div className="card Icon_card mb-5">
                                <div className="icon_div">
                                    <GiUnicycle className="cggym_icon"/>
                                </div>
                                <h4 className="card-title" style={{color:"white",padding:"10px" , textAlign:"center"}}> Modern equipment </h4>
                                <p className="card-subtitle" style={{color:"whitesmoke" ,padding:"6px" , textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Expert/>
            </div>
            <FooterTop/>
            <Footer/>
        </>
    )
}

export default Home;