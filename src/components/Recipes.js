import { useEffect, useState } from "react";
import Search from "./Search";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";

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
		<Search />

        {recipes.map((recipe) => {
            return (
                <Container>
                    <Card>
                        <Accordion defaultActiveKey={new Date(recipe.date).getUTCMilliseconds()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{recipe.recipename}</Accordion.Header>
                                <Accordion.Body>
                                    <div class="container my-5">
                                        <div class="card row flex-row-reverse">
                                            <img class="col-lg-4 card-img-end img-fluid p-0" src={recipe.image} />
                                            <div class="col-lg-8 card-body">
                                                <h4 class="card-title">{recipe.description}</h4>
                                                <p class="card-text">
                                                    <ul>
                                                        <li><b>Cuisine:</b> {recipe.cuisines}</li>
                                                        <li><b>Prep Time:</b> {recipe.preptime}</li>
                                                        <li><b>Cook Time:</b> {recipe.cooktime}</li>
                                                        <li><b>Ingredients:</b> {recipe.ingredients}</li>
                                                        <li><b>Steps:</b> {recipe.steps}</li>
                                                    </ul>
                                                </p>
                                                <p>{recipe.directions}</p>
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

export default Recipes
/* <Card.Img className="card-img-top" src={recipe.image} alt="food image" />
<h4>{recipe.description}</h4>
<ul>
    <li><b>Cuisine:</b> {recipe.cuisines}</li>
    <li><b>Prep Time:</b> {recipe.preptime}</li>
    <li><b>Cook Time:</b> {recipe.cooktime}</li>
    <li><b>Ingredients:</b> {recipe.ingredients}</li>
    <li><b>Steps:</b> {recipe.steps}</li>
</ul>
<p><b>Directions:</b> {recipe.directions}</p> */