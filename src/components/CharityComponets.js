
import "./CharityComponents.css"
function CharityComponent(data) {

    const charity = data.charity;


    return (<div className="CharityContainer" style={{ fontSize: 20 }}> {charity.name} <div> {charity.phone}</div></div>);
}



export default CharityComponent;