import React, { useEffect, useState } from "react";
import { Card , Container } from "semantic-ui-react";

const DetailSurg = ( props ) => {
    
    const [ dataAn, setDataAn ] = useState([{}]);
    const noRegion = props.numeroRegion;

    const periode = () => {
        const dateNow = new Date();
        const year = dateNow.getFullYear();
        const month = dateNow.getMonth();
        const date = new Date(year, month - 3);

        const annee = date.getFullYear().toString();
        const anneeAbrege = annee[2] + annee[3];
        const anneeSuivante = (parseInt(anneeAbrege) + 1).toString();

        let output = anneeAbrege.concat(anneeSuivante);

        if(date.getMonth() < 10){
            output += "-P0".concat(date.getMonth());
        }else output += "-P".concat(date.getMonth());

        return output;
    };

    useEffect(  () => {
        const periodeVise = periode();
         fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=7c83f4be-bc3a-4756-86db-115e8ead93f1&q=${noRegion}&q=${periodeVise}`)
        .then(response => response.json())
        .then( data => setDataAn(data.result.records))
        .catch((e) => console.log(e));
    }, [ noRegion ]);

    return(
        <Container className="ui centered cards">
            { dataAn[0] ? 
                <Card style= {{height: "300px", backgroundColor:"#223654", marginTop: "60px"}}>
                    <Card.Content>
                        <Card.Header style={{color: "#DAE6F0", fontSize: "25px"}}>0 à 6 mois d'attente</Card.Header>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie generale: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Chirurgie_generale }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie orthopedique: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Chirurgie_orthopedique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie plastique:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Chirurgie_plastique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie vasculaire:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Chirurgie_vasculaire }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Neurochirurgie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Neurochirurgie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Obstetrique et gynecologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Obstetrique_et_gynecologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Ophtalmologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Ophtalmologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">ORL chirurgie cervico-faciale:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0]["ORL_chirurgie_cervico-faciale"] }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Urologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Urologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Autres:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Autres }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Total:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[0].Total }</b></span></Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }

            { dataAn[1] ? 
                <Card style= {{height: "300px", backgroundColor:"#223654", marginTop: "60px"}}>
                    <Card.Content>
                        <Card.Header style={{color: "#DAE6F0", fontSize: "25px"}}>6- 12 mois d'attente</Card.Header>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie generale: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Chirurgie_generale }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie orthopedique: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Chirurgie_orthopedique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie plastique:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Chirurgie_plastique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie vasculaire:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Chirurgie_vasculaire }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Neurochirurgie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Neurochirurgie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Obstetrique et gynecologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Obstetrique_et_gynecologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Ophtalmologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Ophtalmologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">ORL chirurgie cervico-faciale:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1]["ORL_chirurgie_cervico-faciale"] }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Urologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Urologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Autres:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Autres }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Total:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[1].Total }</b></span></Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }
            
            { dataAn[2] ? 
                <Card style= {{height: "300px", backgroundColor:"#223654", marginTop: "60px"}}>
                    <Card.Content>
                        <Card.Header style={{color: "#DAE6F0", fontSize: "25px"}}>1 an et plus d'attente</Card.Header>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie generale: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Chirurgie_generale }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie orthopedique: &emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Chirurgie_orthopedique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie plastique:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Chirurgie_plastique }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Chirurgie vasculaire:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Chirurgie_vasculaire }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Neurochirurgie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Neurochirurgie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Obstetrique et gynecologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Obstetrique_et_gynecologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Ophtalmologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Ophtalmologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">ORL chirurgie cervico-faciale:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2]["ORL_chirurgie_cervico-faciale"] }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Urologie:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Urologie }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Autres:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Autres }</b></span></Card.Description>
                        <Card.Description style={{color: "#DAE6F0", fontSize: "13px"}} textAlign="left">Total:&emsp;<span style={{fontSize: "16px", color:"#DD5D20"}}><b>{  dataAn[2].Total }</b></span></Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }
        </Container>
    );
}

export default DetailSurg;