import React, { useEffect, useState } from "react";
import { Card , Container, Icon } from "semantic-ui-react";

const Naissance = ( props ) => {

    const [ data, setData ] = useState([{}]);
    const noRegion = props.numeroRegion;

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=f542c028-ca40-43a5-a4cd-14ba83e27a37&limit=20`)
        .then(response => response.json())
        .then(data => setData(data.result.records))
        .catch((e) => console.log(e))
        ;
    }, [noRegion]);
   
    return(
        <Container className="ui centered cards">
        { data[0] ? 
                <Card>
                    <Card.Content>
                        <Card.Header>Distribution des types d'accouchement</Card.Header>
                        <Card.Description >Nombres d'accouchement:{  data[0].NBR_NAISS_VIVANT }</Card.Description>
                        <Card.Description >Cesariennes:{  data[0].NBR_CESARIENNES }</Card.Description>
                        <Card.Description >Mort né:{  data[0].NBR_MORTINAISSANC }</Card.Description>
                    </Card.Content>
                    <Card.Content extra><p><Icon name='clock outline' />{  data[0].DATE_PRODUCTION }</p></Card.Content>
                </Card> 
                : undefined                 
        }
    </Container>
    );
}

export default Naissance;