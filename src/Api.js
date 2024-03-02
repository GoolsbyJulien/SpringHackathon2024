import { Charity } from "./wrappers/Charity"



export const getCharity = async () => {

    let charities = []

    var response = await fetch('https://data.mo.gov/resource/eb3y-vtsa.json', {

    })
        .then(data => {

            if (data.status === 401) {
                return null;

            }
            return data.json();
        })
        .then(charitiesRes => {

            charitiesRes.forEach(a => {

                let b = new Charity(a.agency_name, a.phone_number, a.location.human_address);
                charities.push(b);
            });
            return charities;

        }).catch(err => {

            return null
        });

    return charities;
}