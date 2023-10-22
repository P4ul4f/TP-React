import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return(
        <Carousel>

            <Carousel.Item>
                <img src="src/assets/images/fondo.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img src="src/assets/images/fondo2.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="src/assets/images/fondo3.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome;