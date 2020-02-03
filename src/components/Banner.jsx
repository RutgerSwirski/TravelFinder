import React from 'react'
import TravelImage from '../images/undraw_destinations_fpv7.svg'

class Banner extends React.Component {
    render() {
        return(
            <div className="col-12 banner">
                <div className="row">
                    <div className="col-lg-5 col-12 banner-content">
                        <h1 className="banner-content-title">Travel Finder</h1>
                        <p className="banner-content-about">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus, molestiae at adipisci explicabo vel.
                        </p>
                        <div className="banner-content-buttons">
                            <button className="banner-content-button">Lorem Ipsum</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <img src={TravelImage} className="banner-image" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner