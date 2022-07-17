import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router"
import Search from "./Search";
=======
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784

function Recipes() {

    const [recipes, setRecipes] = useState(null)
    // const resData = null

<<<<<<< HEAD
	const [recipes, setRecipes] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/api/recipes`,{
=======
    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes`, {
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784

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

<<<<<<< HEAD
	return (
		<main>
		
			<Search />
		
        <div className="row">
				<div className="col-sm-6">
					<h2>{recipes[0].recipename}</h2>
					<img style={{ maxWidth: 200 }} src={recipes[0].image} alt={recipes[0].recipename} />
                    <h3>{recipes[0].cuisines}</h3><br/>
                    <h3>{recipes[0].description}</h3>
					
				</div>
=======
        {recipes.map((recipe) => {
            return (
                <div className="col-sm-6" key={new Date(recipe.date).getUTCMilliseconds()}>
                    <h2>
                        {recipe.name}
                    </h2>
                    <p className="text-center">
                        {recipe.description}
                    </p>
                    <img style={{ maxWidth: 200 }} src={recipe.image} alt={recipe.name} />
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784
                </div>
            )
        })
        }</>)
}

export default Recipes