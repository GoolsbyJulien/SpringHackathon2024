import '../App.css';
import * as api from "../Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from '../components/CharityComponets';
import SearchBar from '../components/SearchBar';
import { searchByName } from '../wrappers/Charity';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function HomePage() {

    const [a, seta] = useState([]);

    const [search, setSearch] = useState({ value: "", type: 0 });

    const updateSearch = (search) => {

        setSearch(search);

    };

    useEffect(
        () => {
            api.getCharity().then((res) => {
                res = searchByName(res, search.value);
                console.log(res);

                seta(res)
            });
        }, [search]
    );

    return (
        <div className="App">
            <header className="App-header">

                <SearchBar onChange={updateSearch} />

                {a.map((data) => {


                    return (<CharityComponent charity={data} />)

                })}


            </header>
        </div>
    );

}