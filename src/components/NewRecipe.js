import { useState } from "react"
import { useNavigate } from "react-router"

function NewRecipe() {

	const navigate = useNavigate()

	const handleAddIngredient = () => {
		const inputState = {
			
		}
	}

	const [recipe, setRecipe] = useState({
		recipename: '',
		image: '',
        cuisines: '',
		difficulty: '',
		preptime: '',
		cooktime: '',
		description: '',
        ingredients: '',
		steps: ''
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
					<label htmlFor="description">Description</label>
					<input
						value={recipe.description}
						onChange={e => setRecipe({ ...recipe, description: e.target.value })}
						className="form-control"
						id="description"
						name="description"
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
					<button>+</button>
				</div>
				<div className="form-group">
					<label htmlFor="steps">Steps</label>
					<input
						value={recipe.steps}
						onChange={e => setRecipe({ ...recipe, steps: e.target.value })}
						className="form-control"
						id="steps"
						name="steps"
					/>
					<button>+</button>
				</div>
				
				
				<input className="btn btn-primary" type="submit" value="Add Recipe" />
			</form>
		</main>
	)
}

export default NewRecipe