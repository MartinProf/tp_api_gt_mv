import React, { useEffect, useState } from 'react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import Navbar from './controle/Navbar';


function App() {
    const [items, setItems] = useState([])

    useEffect( () => {
       fetch('https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=a9272cc9-8234-40d1-9806-9f6b4c75c20d&limit=150')
      .then(response => response.json())
      .then(data => setItems(data.result.records)
        );
    }, [])


  return (
    <div className="App">
      <Navbar /><br/><br/><br/><br/>
      <ChoixInstallation />
      <h1>{}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
