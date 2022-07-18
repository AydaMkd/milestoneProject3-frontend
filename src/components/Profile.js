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
                                <Accordion.Header>{myrecipe.recipename}</Accordion.Header>
                                <Accordion.Body>
                                    <div class="container my-5">
                                        <div class="card row flex-row-reverse">
                                            <img class="col-lg-4 card-img-end img-fluid p-0" src={myrecipe.image} />
                                            <div class="col-lg-8 card-body">
                                                <h4 class="card-title">{myrecipe.description}</h4>
                                                <p class="card-text">
                                                    <ul>
                                                        <li><b>Cuisine:</b> {myrecipe.cuisines}</li>
                                                        <li><b>Prep Time:</b> {myrecipe.preptime}</li>
                                                        <li><b>Cook Time:</b> {myrecipe.cooktime}</li>
                                                        <li><b>Ingredients:</b> {myrecipe.ingredients}</li>
                                                        <li><b>Steps:</b> {myrecipe.steps}</li>
                                                    </ul>
                                                </p>
                                                <p>{myrecipe.directions}</p>
                                            </div>
                                        </div>
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