
import "./CharityComponents.css"
function CharityComponent(data) {

    const charity = data.charity;


    return (
        <div className="CharityContainer" style={{}}>

            <div>
                <div style={{height :"60%"}}>
                    <h3>{charity.name} </h3>

                    <div className="hidden">
                        Address:  {charity.address}, {charity.city} {charity.state}, {charity.zip}
                    </div>
                    <div className="hidden">
                        Phone Number:  {charity.phone}

                    </div>
                </div>
                <button className='ch-button'> Donate</button>
            </div>
        </div>);
}



export default CharityComponent;