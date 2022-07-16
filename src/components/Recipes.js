import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Recipes = () => {
    return (
        <Container>
            <Card border="info" >
                <Card.Header className="blockquote mb-0 card-body">Recipes</Card.Header>
                <Card.Body>
                    <Card.Text>
                    This is where we are going to keep our recipes
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Recipes