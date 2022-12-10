import { useState } from 'react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import DetailsInsta from './controle/DetailsInsta';
import Navbar from './controle/Navbar';

function App() {
  
  const [ permis, setPermis] = useState();

  return (
    <div className="App">

       <Navbar />
      <div className='ui segment' style={{height: "65px" }}/>

      <div className='ui segment' style={{height: "90px", backgroundColor: "red" }}>
        <ChoixInstallation className='installation' onClick={(value) => setPermis(value)} /></div>

      <div style={{height: "200px", backgroundColor: "blue", "padding": "10px"  }}>
        <DetailsInsta  numeroPermis={permis} />
      </div>
    
    </div>
  );
}

export default App;
