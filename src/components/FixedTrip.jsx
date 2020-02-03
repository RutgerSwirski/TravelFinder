import React from 'react'
import { Button } from  'react-bootstrap'

class FixedTrip extends React.Component {
    render() {
        const { tripName, tripDescription, tripPrice, tripBackgroundUrl, tripSale } = this.props
        return(
            <div className="fixed-trip-container col-lg-4 col-md-6 col-12">
                <div className="fixed-trip">
                    { tripSale ? <h3 className="fixed-trip-sale">Sale</h3> : null }
                    <img src={tripBackgroundUrl} alt="" className="fixed-trip-top"/>
                    <div className="fixed-trip-bottom">
                        <h1 className="fixed-trip-bottom-title">{tripName}</h1>
                        <p className="fixed-trip-bottom-description">{tripDescription}</p>
                        <div className="fixed-trip-bottom-details">
                            <p className="fixed-trip-bottom-price">from ${tripPrice}</p>
                        </div>
                        <Button variant="link" className="fixed-trip-bottom-button">More Details</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FixedTrip