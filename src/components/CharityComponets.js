

function CharityComponent(data) {

    const charity = data.charity;

    console.log(charity);

    return (<div style={{ fontSize: 20 }}> {charity.name} <div> {charity.location}</div></div>);
}



export default CharityComponent;