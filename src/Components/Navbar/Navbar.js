import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo from "../../Images/logo.png";
import "./navbar.css";

function Navbar(){
    const [mobile,setmobile] = useState(false);
    const [nav,setnav] = useState(true);
    window.addEventListener("scroll" , ()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    })

    return(
        <>
         <nav className={ nav ? "navbar nav" : "navbar"}>
            <div className="logo">
                    <img src={logo} alt='logo'/>
            </div>
                 <ul className={mobile ? "nav-links-mobile" : "nav-links"}
                 onClick={()=>setmobile(false)}>
                     <Link className="links"  to="/"> <li>Home</li>  </Link> 
                     <Link className="links"  to="/offers"> <li>Offers</li> </Link>
                    <Link className="links" to="/about"> <li>About</li> </Link>
                    <Link className="links" to="/contact"><li>Contact</li> </Link> 
                    <Link className="links signup"><li>Sign Up</li> </Link> 
                 </ul>
                 <button className="menu-icon" onClick={()=>setmobile(!mobile)}>
                     {
                         mobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
                     }
                 </button>
                 </nav>
        </>
    )
}

export default Navbar;