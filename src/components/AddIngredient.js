

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