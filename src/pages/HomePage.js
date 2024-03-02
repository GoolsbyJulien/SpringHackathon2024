import '../App.css';
import * as api from "../Api.js";
import { useEffect, useState } from 'react';
import CharityComponent from '../components/CharityComponets';

export default function HomePage() {

    const [a, seta] = useState([]);

    useEffect(
        () => {
            api.getCharity().then((res) => {
                seta(res)
                console.log(res);
            });
        }, []
    );

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {a.map((data) => {


                        return (<CharityComponent charity={data} />)

                    })}
                </p>

            </header>
        </div>
    );

}