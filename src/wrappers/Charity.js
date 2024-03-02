export class Charity {

    constructor(name = "default", phone, location) {
        this.name = name;
        this.phone = phone;
        this.location = location;
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