import { useState } from 'react';
import { Label } from 'semantic-ui-react';
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

      <div className='ui segment' style={{height: "90px", backgroundColor: "brown" }}>
        <Label style={{fontSize: "2em" }}>Êtat des salles d'urgences au Québec </Label>
      </div>

      <div className='ui segment' style={{height: "100px", backgroundColor: "#74992e" }}>
        <ChoixInstallation className='installation' onClick={(value) => setPermis(value)} /></div>

      <div style={{height: "300px", backgroundColor: "#123456", "padding": "10px", justifyItems: "stretch", justifyContent: "center"  }}>
        <DetailsInsta  numeroPermis={permis} />
      </div>
    
    </div>
  );
}

export default App;
