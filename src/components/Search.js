import { useState } from 'react'

function Search() {

    const [menus, setMenus] = useState('')
    const [query, setQuery] = useState('');
     const resData = null
   
    async function handleSearch(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/recipes/search/${query}`, {



            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
                },
        })

        const resData = await response.json()
            // if data is the same, don't update 
        setMenus(resData)      
    }
    
    console.log(menus)
    console.log(query)
    let display = (
        <>
         
        </>
      );
        if (menus.length > 0) {display = (
            <>
   
            {menus.map(menu => {
                return (
                    <div>
                        <p>{menu.recipename}</p>
                        <p><img width="200" height="200" src={menu.image} /></p>     
                    </div>    
                )
            })}

            </>
        )
    }

    return (
        <div>       
            <input type="text" placeholder="Search recipes by ingredients" onChange={(e) => setQuery(e.target.value)} value={query} />
            <input type="submit" onClick={handleSearch} />         
         {display}
        </div>  
    )
}

export default Search;

  

        //<div>
            
                //<input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query} />
                //<input type="submit" onClick={handleSearch} />
           
        //</div>
    //)
//}

//export default Search;

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
