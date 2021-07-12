import React from "react";
import {useHistory} from "react-router-dom";

export default function Account({wrapperValue, SetWrapperValue}){
    const history = useHistory();

    const SubmitAction = (e)=>{
        e.preventDefault(false);
        history.push("/");
        SetWrapperValue(false);
   }
    return(
        <>
        {
           wrapperValue ? <div id="popup_wrapper" >
                <div className="container-fluid mt-5">
                    <div className="row mx-auto">
                        <div className="col-lg-4 col-md-6 col-sm-8 col-12 mt-5">
                            <div id="popup">
                                <div id="popup_close" onClick={() => SetWrapperValue(false)}> X </div>
                                <h3 className="free-demo mt-4"> FOR FREE DEMO</h3>
                                <div id="popup_content" className="mt-3">
                                    <form onSubmit={SubmitAction}>
                                        <div>
                                            <input className=" signup-input" type="text" placeholder="full name" required />
                                        </div>
                                        <div>
                                        <input className=" signup-input" type="email" placeholder="email" required />
                                        </div>
                                        <div>
                                            <input className="signup-input" type="number" placeholder="phone" required />
                                        </div>
                                        <div>
                                            <label className="gender">Gender</label>
                                            <input type="radio" name="gender" value="male" required /><label className="px-1" >Male</label>
                                            <input type="radio" name="gender" value="female" required/><label className="px-1">Female</label>
                                        </div>
                                        <input type="submit" className="signup-btn mt-1 mb-2" value= "Register"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
        }

        </>
    )
}