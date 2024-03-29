import "./Resources.css";
import React from "react";

const Resources = () => {
    return (
        <div>
            <h1>Resources</h1>
            <div className="resource">
                <h2>Tax Deduction information</h2>
                <p> <a href="https://policyfinder.refed.org/federal-policy/federal-tax-incentives" target="_blank">Federal Tax Incentives</a> </p>
                <p> <a href="https://dor.mo.gov/tax-credits/fpt.html" target="_blank">Missouri Food Pantry Tax Credit</a> </p>
            </div>

            <div className="resource" >
                <h2>Food Insecurity Data</h2>
                <p> <a href="https://map.feedingamerica.org/county/2018/overall/missouri" target="_blank">Feeding America</a> </p>
                <p> <a href="https://feedingmissouri.org/" target="_blank">Feeding Missouri</a> </p>
                <p> <a href="https://www.mora.org/food-waste.html" target="_blank">MORA Food Waste</a> </p>
                <p> <a href="https://foodsecurity.missouri.edu/wp-content/uploads/2019/12/2019-Missouri-Hunger-Atlas_FINAL-2.pdf" target="_blank">Missouri Hunger Atlas 2019</a> </p>
            </div>

            <div className="resource" >
                <h2> Additional Resources</h2>
                <p ></p>
            </div>

        </div>
    );
};

export default Resources;