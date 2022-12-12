import { useEffect, useState } from "react";
import { Button, Select } from "semantic-ui-react";
import { regionAdministrative, nomEtablissement, nomInstallation } from "./tableau";

const ChoixInstallation =  props  => {

    const [ region, setRegion ] = useState();
    const [ etablis, setEtablis] = useState();
    const [ install, setInstall] = useState();
    const [ permis, setPermis ] = useState();
    const [ regionCode, setRegionCode]= useState();

    useEffect( () => {
        const installation = [...nomInstallation];
        const filtred = installation.filter(insta => {
            return insta.key === parseInt(install);
        }).map(a => a.permis);

        const regionAdmin =[...regionAdministrative];
        const filtred2 = regionAdmin.filter(regi =>{
            return regi.key === parseInt(regionCode);
        }).map(a=>a.code)

        setPermis(filtred);
        setRegionCode(filtred2);

    },[install]);
    
     return(
        <div>
            <Select placeholder="Région administrative" key={regionAdministrative} options={regionAdministrative} onChange={(e,data)=> {setRegion(data.value); setRegionCode(data.value)}} code={regionCode} value={region} style={{padding: "1em", margin: "1em", fontSize: "0.90em", width: "25%", background: "#DAE6F0" }} />
            <Select placeholder="Nom de l'établissement" key={nomEtablissement} options={nomEtablissement.filter(a => a.code === region)} value={etablis} onChange={(e, data) => setEtablis(data.value)} style={{padding: "1em", margin: "1em", fontSize: "0.90em", width: "25%", backgroundColor: "#DAE6F0"  }}/>
            <Select placeholder="Nom de l'Installation" key={nomInstallation} options={nomInstallation.filter(a => a.code === etablis)} value={install} onChange={(e, data) => setInstall(data.value)} style={{padding: "1em", margin: "1em", fontSize: "0.90em", width: "25%", backgroundColor: "#DAE6F0"  }}/>
            <Button style={{ backgroundColor: "#DAE6F0" }} onClick={ () => props.onClick({"permis":permis,"regionCode":regionCode}) }>  Valider  </Button>
        </div>
    );
}

export default ChoixInstallation;