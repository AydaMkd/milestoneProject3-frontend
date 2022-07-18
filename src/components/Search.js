import { useState } from 'react'

const Search = (props) => {
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default Search

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