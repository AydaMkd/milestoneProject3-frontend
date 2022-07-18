import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Recipes() {

    const [recipes, setRecipes] = useState(null)
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes`, {

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData != recipes) {
                setRecipes(resData)
            }
        }
        fetchData()
    }, [])
    console.log(recipes)

    if (recipes === null) {
        return <h1>Loading</h1>
    }

    return (<>

        {recipes.map((recipe) => {
            return (
                <Container>
                    <Card>
                        <Accordion defaultActiveKey={new Date(recipe.date).getUTCMilliseconds()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{recipe.recipename}</Accordion.Header>
                                <Accordion.Body>
                                    <h4>{recipe.description}</h4>
                                    <ul>
                                        <li><b>Cuisine:</b> {recipe.cuisines}</li>
                                        <li><b>Prep Time:</b> {recipe.preptime}</li>
                                        <li><b>Cook Time:</b> {recipe.cooktime}</li>
                                        <li><b>Ingredients:</b> {recipe.ingredients}</li>
                                        <li><b>Number Of Steps:</b> {recipe.steps}</li>
                                    </ul>
                                    <p><b>Directions:</b> {recipe.directions}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Container>
            )
        })
        }</>)
}

export default Recipes
