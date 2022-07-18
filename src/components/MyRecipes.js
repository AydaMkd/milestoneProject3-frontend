import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

<<<<<<< HEAD

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
=======
const MyRecipes = () => {
    return (
        <Container>
            <Card border="info" >
                <Card.Header className="blockquote mb-0 card-body">My Recipes</Card.Header>
                <Card.Body>
                    <Card.Text>
                    This is where we are going to keep "my recipes"
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
>>>>>>> efacbbc3f345f5c6436ba4600aab18db63229042
}

export default MyRecipes
