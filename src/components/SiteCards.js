import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { CurrentUser } from '../contexts/CurrentUser';

function SiteCards() {

    const { currentUser } = useContext(CurrentUser)

    return (
        <>{
            !currentUser ? <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first" className="justify-content-center">
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
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first" className="justify-content-center">
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
                            <Nav.Item>
<<<<<<< HEAD
                                <Nav.Link as={Link} to="/value">Get recipe calories</Nav.Link>
=======
                                <Nav.Link as={Link} to="/nutrition">Get Recipe Calories</Nav.Link>
>>>>>>> 447587b244cc5a9c40f245a2fdb9f87243af4e7e
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card>
        }
        </>
    )
}

export default SiteCards;

