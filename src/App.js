//import { useState } from 'react';
import './App.css';
import ChoixInstallation from './controle/ChoixInstallation';
import DetailsInsta from './controle/DetailsInsta';
import Navbar from './controle/Navbar';


function App() {

  //const [ install, setInstall ] = useState();


  return (
    <div className="App">
      <Navbar /><br/><br/><br/><br/>
      <ChoixInstallation />
      <DetailsInsta listeComplete="bonjour" />
      <h1>{}</h1>

    </div>
  );
}

export default App;
