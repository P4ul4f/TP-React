import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return(
        <Carousel>

            <Carousel.Item>
                <img src="https://4kwallpapers.com/images/wallpapers/glossy-abstract-2560x1440-9602.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img src="https://4kwallpapers.com/images/wallpapers/abstract-background-2560x1440-11409.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Dark-Purple-Abstract-Waves-4K-Wallpaper-2.jpg" alt="" className='d block w-100' style={{maxHeight:"500px", objectFit:'cover', backgroundColor:"#FFE3E3"}} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome;