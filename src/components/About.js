import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container>
            <Card className="bg-dark text-black text-center" border="info">
                <Card.Img style={{ objectFit: "cover" }} src="./images/HangryLogo.jpeg" alt="Hangry Logo" />
                <Card.ImgOverlay>
                    <Card.Text>
                        <h1>About Us</h1>
                        <br></br>
                        <h3>
                            We created this app to find and share recipes. This is our
                        </h3>
                        <h3>
                            final Milestone project for a software development bootcamp.
                        </h3>
                        <h3>
                            We hope you enjoy it!
                        </h3>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
}

export default About;
