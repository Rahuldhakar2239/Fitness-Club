import "./about.css";
import Training from "./Training";
import FooterTop from "../Footer/Footer-Top-Icon";
import Footer from "../Footer/Footer";
function About() {
    return (
        <>
            <section id="about">
                <h2 className="about_title">Training with us</h2>
            </section>
                <Training/>
                <FooterTop/>
                <Footer/>

        </>
    )
}

export default About;