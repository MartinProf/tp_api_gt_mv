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
        return (co/cf*100).toFixed(2);
    };


    //const test = new Hopital(112, "CISSS de la Montérégie-Est", "Hôpital Pierre-Boucher", "51229011", "47","62","29","9","2022-12-09T17:46");
    
    /*
        <div>
            {data.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    */



    return(
        <Container>
            { data[0] ? 
                    <Card>
                        <Card.Content>
                            <Card.Header>{ data[0].Nom_installation }</Card.Header>
                            <Card.Description>Civières fonctionnelles:{  data[0].Nombre_de_civieres_fonctionnelles }</Card.Description>
                            <Card.Description>Civieres occupées:{  data[0].Nombre_de_civieres_occupees }</Card.Description>
                            <Card.Description>Taux d'occupation: {tauxOccupation() }%</Card.Description>
                        </Card.Content>
                        <Card.Content extra><p><Icon name='clock outline' />{  data[0].Mise_a_jour }</p></Card.Content>
                    </Card> 
                    : undefined                 
            }
        </Container>
    );
}

export default DetailsInsta;