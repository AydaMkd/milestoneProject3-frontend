import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"



function Search () {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
   
    console.log((query))

    const navigate = useNavigate()

    useEffect(()=>{
        const fetchRecipes = async () => {
            const res =  await axios.get(`http://localhost:5000?q=${query}`)
            setData(res.data);
        };
        fetchRecipes()
        navigate(`/recipes/${query}`);
    },[query])

    return (
        <div>
            
                <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" />
           
        </div>
    )
}

export default Search;

// //saving some code for the search feature
// {/* <Navbar.Collapse id="navbarScroll">
// <Nav
//   className="me-auto my-2 my-lg-0"
//   style={{ maxHeight: "100px" }}
//   navbarScroll
// ></Nav>
// <Form className="d-flex">
  
//   <NavDropdown title="Search by" id="navbarScrollingDropdown">
//     <NavDropdown.Item href="#action3">Cuisine</NavDropdown.Item>
//     <NavDropdown.Item href="#action4">Rating</NavDropdown.Item>
//     <NavDropdown.Item href="#action5">Difficulty</NavDropdown.Item>
//   </NavDropdown>
//   <Button variant="outline-success">Search</Button>
//   <Form.Control
//     type="search"
//     placeholder="Search"
//     className="me-2"
//     aria-label="Search"
//   />
// </Form>
// </Navbar.Collapse> */}