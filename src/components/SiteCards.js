import { Link, Routes, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { CurrentUser } from '../contexts/CurrentUser'

function SiteCards() {

    const { currentUser } = useContext(CurrentUser)

   
    let homepage=(
            
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/myRecipes">My Recipes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/newRecipe">Add Recipe</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card>
            
        );
    
       if (!currentUser){ homepage=(
            
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card>
            
        );
    }  
    return   (
        <div>
            {homepage}
        </div>
    )
}


export default SiteCards;

