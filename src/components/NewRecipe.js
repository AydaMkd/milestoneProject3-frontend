import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import Card from 'react-bootstrap/Card';

function NewRecipe() {

	const navigate = useNavigate()

	const [recipe, setRecipe] = useState({
		recipename: '',
		image: '',
		cuisines: '',
		difficulty: '',
		preptime: '',
		cooktime: '',
		ingredients: '',
		directions: '',
		description: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/recipes`, {
			method: 'POST',
			headers: {
				'x-auth-token': localStorage.getItem('token'),
				'Content-Type': 'application/json'

			},
			body: JSON.stringify(recipe)
		})
		const data = await response.json()
		navigate('/recipes')
	}


	return (

		<Container>
			<Card>
				<Card.Body>
					<main>
						<h1 className="text-center">Add a New Recipe</h1>
						<form onSubmit={handleSubmit}>
							<div className="form-group ">
								<label htmlFor="recipename">Recipe Name</label>
								<input
									required
									value={recipe.recipename}
									onChange={e => setRecipe({ ...recipe, recipename: e.target.value })}
									className="form-control"
									id="recipename"
									name="recipename"
								/>
								<div className="form-group">
									<label htmlFor="image">Enter image URL</label>
									<input
										required
										value={recipe.image}
										onChange={e => setRecipe({ ...recipe, image: e.target.value })}
										className="form-control"
										id="image"
										name="image"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="cuisines">Cuisine</label>
									<input
										required
										value={recipe.cuisines}
										onChange={e => setRecipe({ ...recipe, cuisines: e.target.value })}
										className="form-control"
										id="cuisines"
										name="cuisines"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="difficulty">Difficulty</label>
									<input
										required
										value={recipe.difficulty}
										onChange={e => setRecipe({ ...recipe, difficulty: e.target.value })}
										className="form-control"
										id="difficulty"
										name="difficulty"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="preptime">Preptime</label>
									<input
										required
										value={recipe.preptime}
										onChange={e => setRecipe({ ...recipe, preptime: e.target.value })}
										className="form-control"
										id="preptime"
										name="preptime"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="cooktime">Cooktime</label>
									<input
										required
										value={recipe.cooktime}
										onChange={e => setRecipe({ ...recipe, cooktime: e.target.value })}
										className="form-control"
										id="cooktime"
										name="cooktime"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="directions">Directions</label>
									<input
										required
										value={recipe.directions}
										onChange={e => setRecipe({ ...recipe, directions: e.target.value })}
										className="form-control"
										id="directions"
										name="directions"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="ingredients">Ingredients</label>
									<input
										required
										value={recipe.ingredients}
										onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
										className="form-control"
										id="ingredients"
										name="ingredients"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="description">Description</label>
									<input
										required
										value={recipe.description}
										onChange={e => setRecipe({ ...recipe, description: e.target.value })}
										className="form-control"
										id="description"
										name="description"
									/>
								</div>
							</div>
							<input className="addrecipebtn" type="submit" value="Add Recipe" />
						</form>
					</main>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default NewRecipe