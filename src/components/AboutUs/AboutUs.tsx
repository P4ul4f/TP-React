import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AboutUs = () => {
    return(
        <div>
        <h2 style={{paddingTop:"40px", paddingLeft:"50px"}}>About Us</h2>
        <CardGroup style={{padding:"40px", gap:"25px"}}>
            
            <Card>
                <Card.Img variant="top" src="https://musicart.xboxlive.com/7/c2255100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" style={{height:"85vh"}}/>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://4.bp.blogspot.com/-0kweTW2ZwIk/Vnhh-PFoYmI/AAAAAAAAL6A/BzUvW0aCv_c/s1600/Empire_strikes_back_old.jpg" style={{height:"85vh"}} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://observandocine.com/wp-content/uploads/2015/12/star_wars_vi___return_of_the_jedi___movie_poster_by_nei1b-d5t3b8d.jpg" style={{height:"85vh"}} />
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