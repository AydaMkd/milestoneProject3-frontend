import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container>
            <Card className="bg-dark text-black text-center" border="info">
                <Card.Img style={{ objectFit: "cover" }} src="./images/HangryLogo.jpeg" alt="Hangry Logo" />
                <Card.ImgOverlay>
                    <Card.Text>
                        About Us
                        <br></br>
                        
                            We created this app to find and share recipes. This is our
                        
                            final Milestone project for a software development bootcamp.
                        
                            We hope you enjoy it!
                        
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
}

export default About;