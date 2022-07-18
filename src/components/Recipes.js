import { useEffect, useState } from "react";

function Recipes() {

    const [recipes, setRecipes] = useState(null)
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes`, {

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

    if (recipes === null) {
        return <h1>Loading</h1>
    }

    return (<>

        {recipes.map((recipe) => {
            return (
                <div className="col-sm-6" key={new Date(recipe.date).getUTCMilliseconds()}>
                    <h2>
                        {recipe.recipename}
                    </h2>
					<img style={{ maxWidth: 200 }} src={recipe.image} alt={recipe.recipename} />
					<p className="text-center">
                        {recipe.cuisines}
                    </p>
					<p className="text-center">
                        {recipe.preptime}
                    </p>
					<p className="text-center">
                        {recipe.cooktime}
                    </p>
                    
					<p className="text-center">
                        {recipe.ingredients}
                    </p>
					<p className="text-center">
                        {recipe.directions}
                    </p>
					<p className="text-center">
                        {recipe.steps}
                    </p>
					<p className="text-center">
                        {recipe.description}
                    </p>
                    
                </div>
            )
        })
        }</>)
}

export default Recipes