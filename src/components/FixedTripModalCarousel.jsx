import React from 'react'
import { Carousel } from 'react-bootstrap'

class FixedTripModalCarousel extends React.Component {
    render() {
        const { tripBackgroundUrl } = this.props 
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={tripBackgroundUrl}
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default FixedTripModalCarousel