import { useState } from 'react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import DetailsInsta from './controle/DetailsInsta';
import Navbar from './controle/Navbar';


function App() {
  
  const [numero, setNumero] = useState();


  return (
    <div className="App">
      <Navbar /><br/><br/><br/><br/>
      <ChoixInstallation onClick={(value) => setNumero(value)} />
      <DetailsInsta  />
      <br/><br/><br/><br/>
      <h1>Bonjour</h1>
      <h1>{numero}</h1>
    </div>
  );
}

export default App;
