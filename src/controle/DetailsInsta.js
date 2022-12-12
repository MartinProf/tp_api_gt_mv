import React, { useEffect, useState } from "react";
import { Card , Container, Icon } from "semantic-ui-react";

const DetailsInsta = ( props ) => {

    const [ data, setData ] = useState([{}]);
    const noPermis = props.numeroPermis;

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=a9272cc9-8234-40d1-9806-9f6b4c75c20d&q=${noPermis}`)
        .then(response => response.json())
        .then(data => setData(data.result.records))
        .catch((e) => console.log(e))
        ;
    }, [noPermis]);

    const tauxOccupation = () => {
        const cf = parseInt(data[0].Nombre_de_civieres_fonctionnelles)
        const co = parseInt(data[0].Nombre_de_civieres_occupees)
        return parseFloat((co/cf*100).toFixed(2));
    };
   
    return(
        <Container className="ui centered cards">
            { data[0] ? 
                    <Card style={ tauxOccupation()>100 ?{ height: "250px", backgroundColor:"#E2777A", marginTop: "25px" } : { height: "250px", backgroundColor:"#99CC99", marginTop: "25px" } }>
                        <Card.Content>
                            <Card.Header>{ data[0].Nom_installation }</Card.Header>
                            <Card.Description >Civières fonctionnelles:{  data[0].Nombre_de_civieres_fonctionnelles }</Card.Description>
                            <Card.Description>Civieres occupées:{  data[0].Nombre_de_civieres_occupees }</Card.Description>
                            <Card.Description>Taux d'occupation: { tauxOccupation() }%</Card.Description>
                            <Card.Description>Patient sur civière 24h+: { data[0].Nombre_de_patients_sur_civiere_plus_de_24_heures }</Card.Description>
                            <Card.Description>Patient sur civière 48h+: { data[0].Nombre_de_patients_sur_civiere_plus_de_48_heures }</Card.Description>
                        </Card.Content>
                        <Card.Content extra><p><Icon name='clock outline' />{  data[0].Mise_a_jour }</p></Card.Content>
                    </Card> 
                    : undefined                 
            }
        </Container>
    );
}

export default DetailsInsta;