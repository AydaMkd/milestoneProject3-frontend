import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
}

export default MyRecipes