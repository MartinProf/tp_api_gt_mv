import React, { useEffect, useState } from "react";
import { Card , Container } from "semantic-ui-react";

const DetailSurg = ( props ) => {

    const [ dataAn, setDataAn ] = useState([{}]);
    const [ data6, setData6 ] = useState([{}]);
    const [ data0, setData0 ] = useState([{}]);
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

    const periodeVise = periode();
    let idSurSixMois ="";
    let idSurZeroMois = "";

    function Timer () {
        const [time, setTime] = useState(0);
          
        useEffect(() => {
          setInterval(() => setTime(1), 1000); 
          // counts up 1 every second
          // we need to stop using setInterval when component unmounts
        }, []);
    };
    Timer();

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=7c83f4be-bc3a-4756-86db-115e8ead93f1&q=${noRegion}&q=${periodeVise}&q=an`)
        .then(response => response.json())
        .then(data => setDataAn(data.result.records))
        .catch((e) => console.log(e));
        idSurSixMois = dataAn[0]._id-1;
    }, []);

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=7c83f4be-bc3a-4756-86db-115e8ead93f1&q=${idSurSixMois}`)
        .then(response => response.json())
        .then(data => setData6(data.result.records))
        .catch((e) => console.log(e));
        idSurZeroMois = dataAn[0]._id-2;
    }, []);

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=7c83f4be-bc3a-4756-86db-115e8ead93f1&q=${idSurZeroMois}`)
        .then(response => response.json())
        .then(data => setData0(data.result.records))
        .catch((e) => console.log(e));
    }, []);


    return(
        <Container className="ui centered cards">
            { dataAn[0] ? 
                <Card style= {{height: "275px", backgroundColor:"#E2777A", marginTop: "25px"}}>
                    <Card.Content>
                        <Card.Header>1 an et plus d'attente</Card.Header>
                        <Card.Description >Chirurgie generale: {  dataAn[0].Chirurgie_generale }</Card.Description>
                        <Card.Description>Chirurgie orthopedique: {  dataAn[0].Chirurgie_orthopedique }</Card.Description>
                        <Card.Description>Chirurgie plastique:{  dataAn[0].Chirurgie_plastique }</Card.Description>
                        <Card.Description>Chirurgie vasculaire:{  dataAn[0].Chirurgie_vasculaire }</Card.Description>
                        <Card.Description>Neurochirurgie:{  dataAn[0].Neurochirurgie }</Card.Description>
                        <Card.Description>Obstetrique et gynecologie:{  dataAn[0].Obstetrique_et_gynecologie }</Card.Description>
                        <Card.Description>Ophtalmologie:{  dataAn[0].Ophtalmologie }</Card.Description>
                        <Card.Description>ORL chirurgie cervico-faciale:{  dataAn[0].ORL_chirurgie_cervico }</Card.Description>
                        <Card.Description>Urologie:{  dataAn[0].Urologie }</Card.Description>
                        <Card.Description>Autres:{  dataAn[0].Autres }</Card.Description>
                        <Card.Description>Total:{  dataAn[0].Total }</Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }
            { data6[0] ? 
                <Card style= {{height: "275px", backgroundColor:"#E2777A", marginTop: "25px"}}>
                    <Card.Content>
                        <Card.Header>6- 12 mois d'attente</Card.Header>
                        <Card.Description >Chirurgie generale: {  data6[0].Chirurgie_generale }</Card.Description>
                        <Card.Description>Chirurgie orthopedique: {  data6[0].Chirurgie_orthopedique }</Card.Description>
                        <Card.Description>Chirurgie plastique:{  data6[0].Chirurgie_plastique }</Card.Description>
                        <Card.Description>Chirurgie vasculaire:{  data6[0].Chirurgie_vasculaire }</Card.Description>
                        <Card.Description>Neurochirurgie:{  data6[0].Neurochirurgie }</Card.Description>
                        <Card.Description>Obstetrique et gynecologie:{  data6[0].Obstetrique_et_gynecologie }</Card.Description>
                        <Card.Description>Ophtalmologie:{  data6[0].Ophtalmologie }</Card.Description>
                        <Card.Description>ORL chirurgie cervico-faciale:{  data6[0].ORL_chirurgie_cervico }</Card.Description>
                        <Card.Description>Urologie:{  data6[0].Urologie }</Card.Description>
                        <Card.Description>Autres:{  data6[0].Autres }</Card.Description>
                        <Card.Description>Total:{  data6[0].Total }</Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }
            { data0[0] ? 
                <Card style= {{height: "275px", backgroundColor:"#E2777A", marginTop: "25px"}}>
                    <Card.Content>
                        <Card.Header>0 à 6 mois d'attente</Card.Header>
                        <Card.Description >Chirurgie generale: {  data0[0].Chirurgie_generale }</Card.Description>
                        <Card.Description>Chirurgie orthopedique: {  data0[0].Chirurgie_orthopedique }</Card.Description>
                        <Card.Description>Chirurgie plastique:{  data0[0].Chirurgie_plastique }</Card.Description>
                        <Card.Description>Chirurgie vasculaire:{  data0[0].Chirurgie_vasculaire }</Card.Description>
                        <Card.Description>Neurochirurgie:{  data0[0].Neurochirurgie }</Card.Description>
                        <Card.Description>Obstetrique et gynecologie:{  data0[0].Obstetrique_et_gynecologie }</Card.Description>
                        <Card.Description>Ophtalmologie:{  data0[0].Ophtalmologie }</Card.Description>
                        <Card.Description>ORL chirurgie cervico-faciale:{  data0[0].ORL_chirurgie_cervico }</Card.Description>
                        <Card.Description>Urologie:{  data0[0].Urologie }</Card.Description>
                        <Card.Description>Autres:{  data0[0].Autres }</Card.Description>
                        <Card.Description>Total:{  data0[0].Total }</Card.Description>
                    </Card.Content>
                </Card>: undefined                 
            }
        </Container>
    );
}

export default DetailSurg;