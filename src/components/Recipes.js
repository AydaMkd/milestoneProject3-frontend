import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Recipes(data) {
 
    const navigate = useNavigate()
	
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes`)
            const resData = await response.json()
            setRecipes(resData)
        }
        fetchData()
    }, [])

    let recipesFormatted = recipes.map((recipe) => {
        return (
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey={recipe.id}>
              <Accordion.Header>{recipe}</Accordion.Header>
              <Accordion.Body>
                 
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        )
    })   
}

export default Recipes