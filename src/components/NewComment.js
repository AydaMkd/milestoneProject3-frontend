import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import Card from 'react-bootstrap/Card';

function NewComment() {

	const navigate = useNavigate()

	const [recipeComment, setRecipeComment] = useState({
		comment: ''
	})

	console.log(recipe)
	async function handleSubmit(e) {
		e.preventDefault()
		const response = await fetch(`http://localhost:5000/api/recipes/comment`, {
			method: 'POST',
			headers: {
				'x-auth-token': localStorage.getItem('token'),
				'Content-Type': 'application/json'

			},
			body: JSON.stringify(recipe)
		})
		const data = await response.json()
		console.log(data)
		navigate('/comment/recipeId')

	}
	return (
		<Container>
			<Card>
				<Card.Body>
					<main>
						<h1 className="text-center">Comment on this recipe</h1>
						<form onSubmit={handleSubmit}>
							<div className="form-group ">
								<label htmlFor="commente"></label>
								<input
									required
									value={recipe.recipename}
									onChange={e => setRecipeComment({ ...recipeComment, recipename: e.target.value })}
									className="form-control"
									id="comment"
									name="comment"
								/>
								
							</div>
							<input className="btn btn-primary" type="submit" value="Add Recipe" />
						</form>
					</main>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default NewComment