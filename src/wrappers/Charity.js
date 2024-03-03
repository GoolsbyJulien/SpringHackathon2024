export class Charity {

    constructor(name = "default", phone, location, county) {

        let locationParse = JSON.parse(location);
        this.name = name;
        this.phone = phone;
        this.zip = locationParse.zip;
        this.address = locationParse.address;
        this.city = locationParse.city;
        this.county = county;
        this.state = locationParse.state;
        this.email = 'test@example.com'; // might webscrape this in future
        //logo img ?
    }

}
export function searchByName(charities, name) {



    const result = charities.filter((d) => {

        return d.name.toLowerCase().includes(name.toLowerCase());
    })
    return result;
}

export function searchByZip(charities, zip) {



    const result = charities.filter((d) => {

        return d.zip.toLowerCase().includes(zip.toLowerCase());
    })
    return result;
} export function searchByCounty(charities, county) {



    const result = charities.filter((d) => {

        return d.county.toLowerCase().includes(county.toLowerCase());
    })
    return result;
}