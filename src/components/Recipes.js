import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router"

function Recipes() {
   
    const { id } = useParams()
    const [recipes, setRecipes] = useState(null)
    const [value, setValue]= useState(null)
    // const resData = null
    const navigate = useNavigate()

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes/`, {

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
    console.log(value)
    async function deleteRecipe() {
      
	 await fetch(`http://localhost:5000/api/recipes/${id}`, {
			method: 'DELETE',
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
		})
		navigate('/recipes')
	}
    if (recipes === null) {
        return <h1>Loading</h1>
    }
   function editRecipe(){
    navigate("/edit")
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
                                    <div>
                                    <button type="submit" className="" onClick={editRecipe}>
						           Edit Recipe
					            </button>
                                    <button type="submit" className="btn btn-danger" onClick={deleteRecipe}>
						           Delete
					            </button>
                               
                               
                               
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
{/* <Card.Img className="card-img-top" src={recipe.image} alt="food image" />
<h4>{recipe.description}</h4>
<ul>
    <li><b>Cuisine:</b> {recipe.cuisines}</li>
    <li><b>Prep Time:</b> {recipe.preptime}</li>
    <li><b>Cook Time:</b> {recipe.cooktime}</li>
    <li><b>Ingredients:</b> {recipe.ingredients}</li>
    <li><b>Steps:</b> {recipe.steps}</li>
</ul>
<p><b>Directions:</b> {recipe.directions}</p> */}