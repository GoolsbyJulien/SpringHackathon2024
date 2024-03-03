import "./WhyDonate.css";
import React from "react";

const WhyDonate = () => {
    return (
        <div className="center-text">
            <h1 className="find">Why Donate?</h1>
            <div className="mission">
                <p>Food Insecurity is more prevelant than you might think</p>
                <p>According to these studies</p>
                <br></br>
                <a href="https://frac.org/research/resource-library/state-of-the-states-profiles?state=Missouri" target="_blank" style={{color: "white"}}>Missouri FRAC</a>
                <div></div>
                <br></br>
                <a href="https://feedingmissouri.org/wp-content/uploads/2022/05/FAHH-2021-Key-Findings-Feeding-Missouri.pdf" target="_blank" style={{color: "white"}}>Food Assistance and Hunger in the Heartland 2021, Key Findings</a>
                <div></div>
                <br></br>
                <a href="https://foodsecurity.missouri.edu/wp-content/uploads/2019/12/2019-Missouri-Hunger-Atlas_FINAL-2.pdf" target="_blank" style={{color: "white"}}>Missouri Hunger Atlas 2019</a>

            </div>
        </div>

    );
};

export default WhyDonate;