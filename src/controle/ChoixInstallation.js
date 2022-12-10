import { useEffect, useState } from "react";
import { Button, Select } from "semantic-ui-react";
import { regionAdministrative, nomEtablissement, nomInstallation } from "./tableau";

const ChoixInstallation =  props  => {

    const [ region, setRegion ] = useState();
    const [ etablis, setEtablis] = useState();
    const [ install, setInstall] = useState();
    const [ permis, setPermis ] = useState();

    useEffect( () => {
        const installation = [...nomInstallation];
        const filtred = installation.filter(insta => {
            return insta.key === parseInt(install);
        }).map(a => a.permis);

        setPermis(filtred);
    },[install]);

     return(
        <div>
            <Select placeholder="Région administrative" key={regionAdministrative} options={regionAdministrative} onChange={(e,data)=> setRegion(data.value)} value={region} style={{padding: "1em", margin: "1em", 'font-size': "1em" }} />
            <Select placeholder="Nom de l'établissement" key={nomEtablissement} options={nomEtablissement.filter(a => a.code === region)} value={etablis} onChange={(e, data) => setEtablis(data.value)} style={{padding: "1em", margin: "1em", 'font-size': "1em" }}/>
            <Select placeholder="Nom de l'Installation" key={nomInstallation} options={nomInstallation.filter(a => a.code === etablis)} value={install} onChange={(e, data) => setInstall(data.value)} style={{padding: "1em", margin: "1em", 'font-size': "1em" }}/>
            <Button onClick={ () => props.onClick(permis) }>Valider</Button>
        </div>
    );
}

export default ChoixInstallation