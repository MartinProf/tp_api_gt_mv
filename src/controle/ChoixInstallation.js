import { useState } from "react";
import { Button, Select } from "semantic-ui-react";
import { regionAdministrative, nomEtablissement, nomInstallation } from "./tableau";
import './ChoixInstallation.css';

const ChoixInstallation =  props  => {

    const [ region, setRegion ] = useState();
    const [ etablis, setEtablis] = useState();
    const [ install, setInstall] = useState();
  
     return(
        <div className="ui container">
            <Select placeholder="Région administrative" key={regionAdministrative} options={regionAdministrative} onChange={(e,data)=> setRegion(data.value)} value={region} />
            <Select placeholder="Nom de l'établissement" key={nomEtablissement} options={nomEtablissement.filter(a => a.code === region)} value={etablis} onChange={(e, data) => setEtablis(data.value)}/>
            <Select placeholder="Nom de l'Installation" key={nomInstallation} options={nomInstallation.filter(a => a.code === etablis)} value={install} onChange={(e, data) => setInstall(data.value)}/>
            <Button onClick={() => props.onClick(install)}>Valider</Button>
        </div>
    );
}

export default ChoixInstallation