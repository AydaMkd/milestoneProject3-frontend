import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";

function Profile() {

    const [myrecipes, setMyrecipes] = useState(null)
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            // const response = await fetch(`https://hangrynomster.herokuapp.com/api/recipes/myrecipes`, {
                const response = await fetch(`http://localhost:5000/api/recipes/myrecipes`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData != myrecipes) {
                setMyrecipes(resData)
            }
           
        }
        fetchData()
    }, [])
    console.log(myrecipes)

    if (myrecipes === null) {
        return <h1>Loading</h1>
    }

    return (<>

        {myrecipes.map((myrecipe) => {
            return (
                <Container>
                    <Card>
                        <Accordion defaultActiveKey={new Date(myrecipe.date).getUTCMilliseconds()}>
                            <Accordion.Item eventKey="0">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
                                <Accordion.Body>
                                    <div class="container my-5">
                                        
                                                    <ul>
                                                        <li><b>Cuisine:</b> {myrecipe.recipename}</li>
                                                        </ul>
                                      
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Container>
            )
        })
        }</>)
}

export default Profile