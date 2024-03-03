import "./Charities.css";
import React from "react";
import { useEffect, useState } from 'react';

const Charities = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        var deduction = calculateTaxDeduction(event.target.basis.value, event.target.margin.value);
        setDeduction(deduction);

        event.target.reset();
    };
    const [deduction, setDeduction] = useState('0');


    return (
        <div>
            <h1>Charities</h1>
            <div style={{ minHeight: '100vh' }}>


                <div style={{ height: '100%' }}>
                    <div className="loan-form">
                    <form style={{ display: "block" }} onSubmit={handleSubmit}>
                            <div className="input-section">
                                <label htmlFor="basis" step="0.01"> Tax Basis:</label>
                                <input id="basis" type="number" step="0.01" />
                            </div>

                            <div className="input-section">

                                <label htmlFor="margin">Expected Profit Margin:</label>
                                <span> <input id="margin" type="number" step="0.01" /> </span>
                            </div>

                            <input className="loan-button" type={"submit"} value="Calculate" />

                        </form>
                        <p style={{ fontSize: '25px' }}>{ } </p>
                        <p style={{ fontSize: '25px' }}>{ } </p>
                    </div>



                    <div className="loan-display">
                        <p style={{ fontSize: "25px", textAlign: "center" }}> Your Tax Deduction is...</p>
                        <div className="loan-display-text">

                            <p>${deduction}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
/*
Tax basis X 2 = $30 X 2 = $60
or
Tax basis + (expected profit margin /2)
= $30 + ($70/2) = $65

*/
function calculateTaxDeduction(tb, margin) {

    let equation1 = tb * 2;
    let equation2 = tb + (margin / 2);

    if (equation1 < equation2)
        return equation1;
    else return equation2;

}

export default Charities;