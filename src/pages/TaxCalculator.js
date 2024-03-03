import "./TaxCalculator.css";
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
            <h1 className="find">Tax Deduction Estimator</h1>
            <div style={{ minHeight: '50vh' }}>


                <div style={{ height: '100%' }}>
                    <div className="loan-form">
                        <form style={{ display: "block" }} onSubmit={handleSubmit}>
                            <div className="input-section">
                                <label htmlFor="basis" step="0.01"> Tax Basis:</label>
                                <input id="basis" type="number" step="0.01" style={{marginLeft: "204px"}}/>
                                <br></br>
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
                    <div style={{ textAlign: "center", marginTop: 80 }}>

<div className="help mission" style={{ fontSize: 15, width: "40%", display: "inline-block", background: "purple" }}>
    <h3>How to Find Tax Basis</h3>
    <p> texthe amount it cost to produce the food
        you donated. Smaller businesses that don’t use inventory tax
        accounting and aren’t required to capitalize indirect costs can
        generally use 25 percent of the fair market value of the donated food
        as their tax basis.
    Subtract your tax basis from the fair</p>

</div>
<div className="mission help" style={{ fontSize: 15, width: "40%", display: "inline-block", background: "purple" }}>
    <h3>How to Find Expected Profit Margin</h3>
    <p> Subtract your tax basis from the fair market value to find the
        amount of profit margin—meaning the profit you would have made
        from selling the food. </p>

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