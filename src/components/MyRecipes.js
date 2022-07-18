import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import Search from "./Search";


function MyRecipes() {

	// const {  } = useParams()

	const [recipes, setRecipes] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/api/recipes`,{

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                    
                },
            })
			const resData = await response.json()
			setRecipes(resData)
		}
		fetchData()
	}, [])
    console.log(recipes)

	if (recipes === null) {
		return <h1>Loading</h1>
	}


	return (
		<main>
        <div>
            <Search />
        </div>
        <div className="row">
				<div className="col-sm-6">
                    <h2>{recipes[0].recipename}</h2>
					<img style={{ maxWidth: 200 }} src={recipes[0].image} alt={recipes[0].recipename} />
                    <h3>{recipes[0].cuisines}</h3><br/>
                    <h3>{recipes[0].description}</h3>
					
				</div>
                </div>
    
		</main>
	)
}

export default MyRecipes