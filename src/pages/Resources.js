import "./Resources.css";
import React from "react";

const Resources = () => {
    return (
        <div>
            <h1 className="find">Resources</h1>
            <div className="resource">
                <h2><strong>Tax Deduction information</strong></h2>
                <p> <a href="https://policyfinder.refed.org/federal-policy/federal-tax-incentives" target="_blank" style={{color: "white"}}>Federal Tax Incentives</a> </p>
                <p> <a href="https://dor.mo.gov/tax-credits/fpt.html" target="_blank" style={{color: "white"}}>Missouri Food Pantry Tax Credit</a> </p>
            </div>

            <div className="resource" >
                <h2><strong>Food Insecurity Data</strong></h2>
                <p> <a href="https://map.feedingamerica.org/county/2018/overall/missouri" target="_blank" style={{color: "white"}}>Feeding America</a> </p>
                <p> <a href="https://feedingmissouri.org/" target="_blank" style={{color: "white"}}>Feeding Missouri</a> </p>
                <p> <a href="https://www.mora.org/food-waste.html" target="_blank" style={{color: "white"}}>MORA Food Waste</a> </p>
                <p> <a href="https://foodsecurity.missouri.edu/wp-content/uploads/2019/12/2019-Missouri-Hunger-Atlas_FINAL-2.pdf" target="_blank" style={{color: "white"}}>Missouri Hunger Atlas 2019</a> </p>
            </div>


        </div>
    );
};

export default Resources;