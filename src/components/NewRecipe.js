import { useState } from "react"
import { useNavigate } from "react-router"


function NewRecipe() {

<<<<<<< HEAD
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
=======
    const navigate = useNavigate()
   
   
    const [recipe, setRecipe] = useState({
        recipename: '',
        cuisines: '',
		description:''
    })
   console.log(recipe)
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/recipes`, {
            method: 'POST',
            headers: {
				'x-auth-token': localStorage.getItem('token'),
>>>>>>> a6be7676fd81cf7b1d6d1acbdc6678de90b0b0f0
				'Content-Type': 'application/json'
				
            },
            body: JSON.stringify(recipe)
		})
        const data = await response.json()
        console.log(data)
		navigate('/new')
       
       
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
<<<<<<< HEAD
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
=======
				<div className="form-group">
					<label htmlFor="cuisines">Cuisine</label>
>>>>>>> a6be7676fd81cf7b1d6d1acbdc6678de90b0b0f0
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
					<label htmlFor="description">Description</label>
					<input
					    required
						value={recipe.description}
						onChange={e => setRecipe({ ...recipe, description: e.target.value })}
						className="form-control"
<<<<<<< HEAD
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
=======
						id="description"
						name="description"
>>>>>>> a6be7676fd81cf7b1d6d1acbdc6678de90b0b0f0
					/>
					<button>+</button>
				</div>
				
				
				<input className="btn btn-primary" type="submit" value="Add Recipe" />
			</form>
		</main>
	)
}

export default NewRecipe