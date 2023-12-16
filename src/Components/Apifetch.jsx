import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Apifetch() {

    const [result, setresult] = useState([])

    const base_url = 'https://jsonplaceholder.typicode.com/posts';

    const fetchAPI = async () => {
        const response = await fetch(base_url)
            .then(apif => apif.json())
            .then(data => setresult(data))

    }

    console.log(result);

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            {result.map((data) => (
                <Card style={{ border:'2px solid black' , width: '18rem', display: 'inline-flex', margin: '10px', textAlign: 'center', height: ' 350px'  }}>
                    <Card.Header style={{ backgroundColor: 'grey' }}>{data.userId}</Card.Header>
                    <ListGroup variant="flush" >
                        <ListGroup.Item >{data.id}</ListGroup.Item>
                        <ListGroup.Item >{data.title}</ListGroup.Item>
                        <ListGroup.Item >{data.body}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    )
}

export default Apifetch
