import { useState } from "react"
import { useNavigate } from "react-router"


function NewRecipe() {

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
				'Content-Type': 'application/json'
				
            },
            body: JSON.stringify(recipe)
		})
        const data = await response.json()
        console.log(data)
		navigate('/recipes')
       
       
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
				
				<input className="btn btn-primary" type="submit" value="Add Recipe" />
			</form>
		</main>
	)
}

export default NewRecipe