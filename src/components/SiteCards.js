import { Link, Routes, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { CurrentUser } from '../contexts/CurrentUser'

function SiteCards() {

    const { currentUser } = useContext(CurrentUser)

<<<<<<< HEAD
   
    let homepage=(
            
=======
    return (
        <>{
            !currentUser ? <Card>
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
                :
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784
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
<<<<<<< HEAD
            
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
=======
        }
        </>
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784
    )
}

export default SiteCards;
