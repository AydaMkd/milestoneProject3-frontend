import { useEffect, useState } from "react";
import Search from "./Search";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from "react-router"

function Recipes() {

    const { id } = useParams()
    const [recipes, setRecipes] = useState(null)
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            // const response = await fetch(`https://hangrynomster.herokuapp.com/api/recipes/`, {
                const response = await fetch(`https://hangrynomster.herokuapp.com/api/recipes/`, {
                headers: {
                    //'x-auth-token': localStorage.getItem('token'),
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
        <h1 className="text-center">Recipes</h1>
        <div>
            <Search />
        </div>
        {recipes.map(recipe => {

            return (
                <Container>
                    <Card>
                        <Accordion defaultActiveKey={new Date(recipe.date).getUTCMilliseconds()}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{recipe.recipename}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="container my-5">
                                        <div className="card row flex-row-reverse">
                                            <img className="col-lg-4 card-img-end img-fluid p-0" src={recipe.image} />
                                            <div className="col-lg-8 card-body">
                                                <h4 className="card-title">{recipe.description}</h4>
                                                <div className="card-text">
                                                    
                                                        <div><b>Cuisine:</b> {recipe.cuisines}</div>
                                                        <div><b>Difficulty</b> {recipe.difficulty}</div>
                                                        <div><b>Ingredients:</b> {recipe.ingredients}</div>
                                                        <div><b>Prep Time:</b> {recipe.preptime}</div>
                                                        <div><b>Cook Time:</b> {recipe.cooktime}</div>
                                                        <div><b>Ingredients:</b> {recipe.ingredients}</div>
                                                        <div><b>Directions: </b> {recipe.directions}</div>
                                                   
                                                </div>
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

export default Recipes;