import { useEffect, useState } from "react";
import Search from "./Search";

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
		<Search />

        {recipes.map((recipe) => {
            return (
                <div className="col-sm-6" key={new Date(recipe.date).getUTCMilliseconds()}>
                    <h2>
                        {recipe.recipename}
                    </h2>
                    <p className="text-center">
                        {recipe.description}
                    </p>
                    <img style={{ maxWidth: 200 }} src={recipe.image} alt={recipe.name} />
                </div>
            )
        })
        }</>)
}

export default Recipes