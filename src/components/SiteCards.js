import { Link, Routes, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import About from './About';
import Recipes from './Recipes';
import MyRecipes from './MyRecipes';
import Profile from './Profile';

function SiteCards() {
    return (
        <><>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/myRecipes">My Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
            </Card>
        </><div className="Display">
                <Routes>
                    <Route path="/home/about" element={<About />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/myRecipes" element={<MyRecipes />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div></>
    );
}

export default SiteCards;