import "./Home.css";
import React from "react";

const Home = () => {
    return (
        <div>
            <h1 className="find">Home</h1>

            <div className="mission">
                <h2> Mission Statement</h2>
                <p >Our mission is to forge meaningful connections between compassionate businesses and charitable organizations, working collaboratively to combat food waste and nourish communities in need. We strive to build a sustainable ecosystem that seamlessly redirects surplus food from restaurants and stores to those facing hunger. Through our innovative platform, we aim to inspire a collective effort to eliminate food waste, fostering a world where every meal contributes to the well-being of individuals and the health of our planet.</p>
            </div>

            <div className="mission" style={{background: "purple"}}>
                <h2> Our App</h2>
                <p >Our mission is to forge meaningful connections between compassionate businesses and charitable organizations, working collaboratively to combat food waste and nourish communities in need. We strive to build a sustainable ecosystem that seamlessly redirects surplus food from restaurants and stores to those facing hunger. Through our innovative platform, we aim to inspire a collective effort to eliminate food waste, fostering a world where every meal contributes to the well-being of individuals and the health of our planet.</p>
            </div>


        </div>
    );
};

export default Home;