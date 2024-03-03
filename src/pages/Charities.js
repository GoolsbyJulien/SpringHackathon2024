import "./Businesses.css";
import React from "react";

const Charities = () => {
    return (
        <div>
            <h1 className="find">Join Our Cause!</h1>
            <div style={{ height: '100%' }}>
                    <div className="loan-form">
                    <form style={{ display: "block" }} onSubmit={null}>
                            <div className="input-section" >
                                <label htmlFor="basis" step="0.01">First Name:</label>
                                <input id="basis" type="string" style={{marginLeft: "49px", width: "490px"}}/>
                                <br></br>
                                <label htmlFor="margin">Last Name:</label>
                                <input id="margin" type="string" style={{marginLeft: "50px", width: "490px"}}/>
                                <br></br>
                                <label htmlFor="margin">Phone:</label>
                                <input id="margin" type="string" style={{marginLeft: "96px", width: "490px"}}/>
                                <br></br>
                                <label htmlFor="margin">Email:</label>
                                <input id="margin" type="string" style={{marginLeft: "106px", width: "490px"}}/>
                                <br></br>
                                <label for="identity">Are you a business, charity, or volunteer: </label> 
                                <select name="identity" id="identity" style={{marginLeft: "10px", width: "206px"}}> 
                                    <option value="Business">Business</option> 
                                    <option value="Charity">Charity</option> 
                                    <option value="Volunteer">Volunteer</option> 
                                </select>
                            </div>

                            <input className="loan-button" type={"submit"} value="Submit" />

                        </form>
                        <p style={{ fontSize: '25px' }}>{ } </p>
                        <p style={{ fontSize: '25px' }}>{ } </p>
                    </div>
                    </div>



        </div>

    );
};

export default Charities;