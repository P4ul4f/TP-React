import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AboutUs = () => {
    return(
        <div>
        <h2 style={{paddingTop:"40px", paddingLeft:"50px"}}>About Us</h2>
        <CardGroup style={{padding:"40px", gap:"25px"}}>
            
            <Card>
                <Card.Img variant="top" src="src/assets/images/moon.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="src/assets/images/magician.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="src/assets/images/lovers.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    )
}

export default AboutUs;