import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

function Search() {

    const [menus, setMenus] = useState('')
    const [query, setQuery] = useState('');

    const resData = null
    const navigate = useNavigate()

    async function handleSearch(e) {
        e.preventDefault()
        const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/recipes/search/${query}`, {



            headers: {
                // 'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
        })

        const resData = await response.json()
        // if data is the same, don't update

        setMenus(resData)
        //navigate(`/search/${query}`)


    }

    console.log(menus)
    console.log(query)


    let display = (
        <>

        </>

        /*      );
            if (menus.length > 0) {display = (
           <>
           <ul>
          {menus.map(menu => {
            return (
              <ul>
              <li >
                {menu.recipename}
              </li>
              <li >
              <img width="200" height="200" src={menu.image} />
              </li>
              <li >
                {menu.preptime}
              </li>
              </ul>
            )
          })}
        </ul> */

    );
    if (menus.length > 0) {
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
                                                <div class="container my-5">
                                                    <div class="card row flex-row-reverse">
                                                        <img class="col-lg-4 card-img-end img-fluid p-0" src={menu.image} />
                                                        <div class="col-lg-8 card-body">
                                                            <h4 class="card-title">{menu.description}</h4>
                                                            <p class="card-text">
                                                                <ul>
                                                                    <li><b>Cuisine:</b> {menu.cuisines}</li>
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


            </>
        )

    }

    return (
        <div className="text-center">
            <input type="submit" value="Search" onClick={handleSearch} />
            <input type="text" placeholder="        by recipe name" onChange={(e) => setQuery(e.target.value)} value={query} />
            {display}
            <br></br>
        </div>
    )
}

export default Search;