import '../App.css';
import * as api from "../Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from '../components/CharityComponets';
import SearchBar from '../components/SearchBar';
import { searchByName, searchByZip, searchByCounty } from '../wrappers/Charity';


export default function HomePage() {

    const [a, seta] = useState([]);

    const [search, setSearch] = useState({ value: "", type: 0 });

    const updateSearch = (search) => {


        setSearch(search);
        console.log(search.type);

    };

    useEffect(
        () => {
            api.getCharity().then((res) => {

                if (search.value == "") {
                    search.value = "-1";
                }
                const searchType = search.type;
                if (searchType == 0)
                    res = searchByName(res, search.value);
                else if (searchType == 1)
                    res = searchByZip(res, search.value);
                else if (searchType == 2)
                    res = searchByCounty(res, search.value);
                console.log(res);

                seta(res)
            });
        }, [search]
    );

    return (
        <div className="App">
            <header className="App-header">


                <h2 className='find'>Find-A-Charity</h2>
                <SearchBar onChange={updateSearch} />


                <div >
                    {a.map((data) => {


                        return (<CharityComponent charity={data} />)

                    })}
                </div>

            </header>
        </div>
    );

}