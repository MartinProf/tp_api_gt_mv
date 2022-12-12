import { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import DetailsInsta from './controle/DetailsInsta';
import Navbar from './controle/Navbar';
import DetailSurg from './controle/DetailSurg';

function App() {
  
  const [ permis, setPermis] = useState();
  const [ regionCode, setRegionCode] = useState();
     
  return (
    <div className="App">

       <Navbar  />

      <div className='ui segment' style={{height: "90px", backgroundColor: "#DAE6F0", marginTop: "80px"}}>
        <Label style={{fontSize: "2em", backgroundColor: "#DAE6F0", color: "#223654" }}>Êtat des salles d'urgences au Québec </Label>
      </div>

      <div className='ui segment' style={{height: "100px", backgroundColor: "#DD5D20" }}>
        <ChoixInstallation className='installation' onClick={(value) =>{setPermis(value.permis); setRegionCode(value.regionCode)} }/>
      </div>

      <div style={{height: "300px", backgroundColor: "#DAE6F0", padding: "10px" }}>
        <DetailsInsta  numeroPermis={permis} />
      </div>
      
      <div className='ui segment fixed bottom' style={{height: "100px", backgroundColor: "#223654" }}>
          <Button style={{ color: "#FFFFFF", fontSize: "1.5em", backgroundColor: "#223654"}} >Pour la région administrative de: </Button>
      </div>
      <div style={{height: "400px", backgroundColor: "#DAE6F0", padding: "10px" }}>
        <DetailSurg numeroRegion={regionCode}/>
      </div>

      <div className='ui segment fixed bottom' style={{height: "100px", backgroundColor: "#223654" }}>
          <Button style={{ color: "#FFFFFF", fontSize: "1.5em", backgroundColor: "#223654"}} >Travail réalisé par Guillaume Tremblay et Martin Vézina</Button>
      </div>


    </div>

  );
}

export default App;
