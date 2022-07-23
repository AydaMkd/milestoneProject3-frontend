import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <div className='aboutbg'>
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
<<<<<<< HEAD
=======
                        <br></br>

                            The idea for ths application began when one member of the team was eating dinner and thought about the diversity of this team and how many amazing recipes they might have to share between them.
>>>>>>> bf4d47b7c23976c937aa950bce07c7bfff5029d9
                        
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
        </div>
    );
}

export default About;