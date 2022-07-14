import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const About = () => {
    return (
        <Container>
            <Card border="info" >
                <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        We created this app to find and share recipes. This is our
                    </Card.Text>
                     <Card.Text>
                        final Milestone project for a software developement bootcamp. 
                    </Card.Text>
                    <Card.Text>
                        We hope you enjoy! 
                    </Card.Text>
                </Card.Body>
                <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="foodBackground.jpg" />
            </Card>
        </Container>
    );
}

export default About;