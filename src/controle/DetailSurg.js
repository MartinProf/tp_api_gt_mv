import React, { useEffect, useState } from "react";
import { Card , Container, Icon } from "semantic-ui-react";

const DetailSurg = ( props ) => {

    const [ data, setData ] = useState([{}]);
    const noRegion = props.numeroRegion;

    useEffect( () => {
        fetch(`https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=7c83f4be-bc3a-4756-86db-115e8ead93f1&q=${noRegion}`)
        .then(response => response.json())
        .then(data => setData(data.result.records))
        .catch((e) => console.log(e))
        ;
    }, [noRegion]);


    return(
        <Container className="ui centered cards">
            { data[0] ? 
                    <Card style= {{height: "250px", backgroundColor:"#E2777A", marginTop: "25px"}}>
                        <Card.Content>
                            <Card.Header>Periode d'attente pour une chirurgie dans la region:
                                { data[0].PeriodeAttente }</Card.Header>
                            <Card.Description >Delais d'attente:{  data[0]["Delais_d'attente"] }</Card.Description>
                            <Card.Description>Nombre de chirurgie totaux:{  data[0].Total }</Card.Description>
                        </Card.Content>
                    </Card> 
                    : undefined                 
            }
        </Container>
    );
}

export default DetailSurg;