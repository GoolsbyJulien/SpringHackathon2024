import './App.css';
import * as api from "./Api.js";
import { useEffect, useState } from 'react';
function App() {



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

            return <div style={{ fontSize: 20 }}> {data.name} <div> {data.location}</div></div>
          })} <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
