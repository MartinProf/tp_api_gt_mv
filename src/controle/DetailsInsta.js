import React, { useEffect, useState } from "react";
import { Card , Icon } from "semantic-ui-react";

function DetailsInsta ( props ) {
    
    const [ data, setData ] = useState([]);

    useEffect( () => {
       fetch('https://www.donneesquebec.ca/recherche/api/3/action/datastore_search?resource_id=a9272cc9-8234-40d1-9806-9f6b4c75c20d&limit=150')
      .then(response => response.json())
      .then(data => setData(data.result.records)
        );
    }, []);
    
    
    /*
        <div>
            {data.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    */

    return(
        <>
        <Card>
            <Card.Content>
                <Card.Header>Bob</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <p>
                <Icon name='user' />
                22 Friends
            </p>
            </Card.Content>
        </Card>
        </>
    );

}

export default DetailsInsta;