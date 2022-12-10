import { useState } from 'react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import DetailsInsta from './controle/DetailsInsta';
import Navbar from './controle/Navbar';

function App() {
  
  const [ permis, setPermis] = useState();

  return (
    <div className="App">
      <Navbar /><br/><br/><br/><br/>
      <ChoixInstallation onClick={(value) => setPermis(value)} />
      <DetailsInsta  numeroInstallation={permis}/>
      <br/><br/><br/><br/>
      <h1>Bonjour</h1>
      <h1>{permis}</h1>
    </div>
  );
}

export default App;
