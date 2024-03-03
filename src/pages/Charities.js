import "./Businesses.css";
import React from "react";

const Charities = () => {
    return (
        <div>
            <h1>Join Our Cause!</h1>
            <div style={{ height: '100%' }}>
                    <div className="loan-form">
                    <form style={{ display: "block" }} onSubmit={null}>
                            <div className="input-section">
                                <label htmlFor="basis" step="0.01"> First Name:</label>
                                <input id="basis" type="string"/>
                            </div>
                            <div className="input-section">
                                <label htmlFor="margin">Last Name:</label>
                                <span> <input id="margin" type="string"/> </span>
                            </div>
                            <div className="input-section">
                                <label htmlFor="margin">Phone:</label>
                                <span> <input id="margin" type="string"/> </span>
                            </div>
                            <div className="input-section">
                                <label htmlFor="margin">Email:</label>
                                <span> <input id="margin" type="string"/> </span>
                            </div>
                            <div className="input-section">
                            <label for="identity">Are you a business, charity, or volunteer: </label> 
                                <select name="identity" id="identity"> 
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