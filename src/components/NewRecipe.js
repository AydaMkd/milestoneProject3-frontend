import { useState } from "react"
import { useNavigate } from "react-router"

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
        instructions: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/recipes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(recipe)
		})

		navigate('/newrecipe')
	}

	return (
		<main>
			<h1>Add a New Recipe</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="recipename">Recipe Name</label>
					<input
						required
						value={recipe.recipename}
						onChange={e => setRecipe({ ...recipe, recipename: e.target.value })}
						className="form-control"
						id="recipename"
						name="recipename"
					/>
				</div>
                <div className="form-group">
					<label htmlFor="image">Recipe Picture</label>
					<input
						value={recipe.image}
						onChange={e => setRecipe({ ...recipe, image: e.target.value })}
						className="form-control"
						id="image"
						name="image"
					/>
				</div>
                <div className="form-group">
					<label htmlFor="cuisines">Cuisines</label>
					<input
						value={recipe.cuisines}
						onChange={e => setRecipe({ ...recipe, cuisines: e.target.value })}
						className="form-control"
						id="cuisines" name="cuisines" />
				</div>
				<div className="form-group">
					<label htmlFor="difficulty">Difficulty</label>
					<input
						required
						value={recipe.difficulty}
						onChange={e => setRecipe({ ...recipe, difficulty: e.target.value })}
						className="form-control"
						id="difficulty"
						name="difficutly"
					/>
				</div>	
                			
				<div className="form-group">
					<label htmlFor="preptime">Prep Time</label>
					<input
						value={recipe.preptime}
						onChange={e => setRecipe({ ...recipe, preptime: e.target.value })}
						className="form-control"
						id="preptime"
						name="preptime"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cooktime">Cook Time</label>
					<input
						value={recipe.cooktime}
						onChange={e => setRecipe({ ...recipe, cooktime: e.target.value })}
						className="form-control"
						id="cooktime"
						name="cooktime"
					/>
				</div>
                <div className="form-group">
					<label htmlFor="ingredients">Ingredients</label>
					<input
						value={recipe.ingredients}
						onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
						className="form-control"
						id="ingredients"
						name="ingredients"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="instructions">Instructions</label>
					<input
						value={recipe.instructions}
						onChange={e => setRecipe({ ...recipe, instructions: e.target.value })}
						className="form-control"
						id="instructions"
						name="instructions"
					/>
				</div>
				
				<input className="btn btn-primary" type="submit" value="Add Recipe" />
			</form>
		</main>
	)
}

export default NewRecipe