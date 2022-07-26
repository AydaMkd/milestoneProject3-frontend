import { useEffect, useState, useContext } from "react";
// import Search from "./Search";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router"
import Recipedisplay from "./Recipedisplay";
import { CurrentUser } from "../contexts/CurrentUser";


function Recipes() {

    const { id } = useParams()
    const [recipes, setRecipes] = useState(null)
    const { currentUser, setCurrentUser } = useContext(CurrentUser);
    
    // const resData = null

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/recipes/`, {

                headers: {
                    //'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData !== recipes) {
                setRecipes(resData)
            }
        }
        fetchData()
    }, [])

    const [menus, setMenus] = useState('')
    const [query, setQuery] = useState('');

    async function handleSearch(e) {
        e.preventDefault()
        const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/recipes/search/${query}`, {



            headers: {
                // 'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
        })

        const resultData = await response.json()
        // if data is the same, don't update

        setMenus(resultData)
        //navigate(`/search/${query}`)
        
    }

   function handleClick(e){
    e.preventDefault()
    setMenus([])

   }
      
    if (recipes === null) {
        return <h1>Loading</h1>
    }
    let display = (
        <>
        <Recipedisplay/>
        </>

    );

   
    // if (menus.length>0){
    // display=(menus.map(menu=>{ return (menu.recipename)
    
    // }))}
   if (menus.length>0){
    display = (
        <>
            {menus.map(menu => {
                 return (
                    <div>
                        <Container>
                        <Card style={{border: '5px solid rgb(252, 207, 60)'}} >
                                <Accordion defaultActiveKey={new Date(menu.date).getUTCMilliseconds()}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{menu.recipename}</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="container my-5">
                                                <div className="card row flex-row-reverse">
                                                    <img className="col-lg-4 card-img-end img-fluid p-0" src={menu.image} />
                                                    <div className="col-lg-8 card-body">
                                                        <h4 className="card-title">{menu.description}</h4>
                                                        <p className="card-text">
                                                            <ul>
                                                               <li><b>Recipe Owner:</b> {menu.name}</li> 
                                                                <li><b>Cuisine:</b> {menu.cuisines}</li>
                                                                <li><b>Difficulty:</b> {menu.difficulty}</li>
                                                                <li><b>Prep Time:</b> {menu.preptime}</li>
                                                                <li><b>Cook Time:</b> {menu.cooktime}</li>
                                                                <li><b>Ingredients:</b> {menu.ingredients}</li>
                                                                <li><b>Directions: </b> {menu.directions}</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>
                        </Container>
                        
                    </div>

                )
            })}

            <button className="addbacktorecipebtn" value="recipes" onClick={handleClick} >Back to Recipes</button>

        </>
    )
   
   }
  
            return (

                <div className= "text-center">
                <input type="submit" className="searchbtn" value="Search" onClick={handleSearch} />
            <input type="text" placeholder="  by recipe name" onChange={(e) => setQuery(e.target.value)} value={query} />
           
            <br></br>
            
            <br></br>
                {display}</div>
            )

}

export default Recipes;