import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import FixedTripModalCarousel from './FixedTripModalCarousel'

class FixedTripModal extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    }

    render() {
        const { tripName, tripDescription, tripPrice, tripBackgroundUrl, tripSale } = this.props
        return(
            <Modal show={this.state.showModal} onHide={this.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="trip-modal-title">{tripName}</Modal.Title>
                </Modal.Header>
                <FixedTripModalCarousel className="trip-modal-top" tripBackgroundUrl={tripBackgroundUrl} />
                <Modal.Body className="trip-modal-bottom">
                    <p>{tripDescription}</p>
                    <div className="trip-modal-about">
                        <h5>This Trip includes:</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, totam?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat, ea deserunt officiis et nam?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis provident harum porro ducimus consequatur soluta ex cum expedita odit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt obcaecati dolores rem nam voluptate aliquid esse modi, deserunt eos alias ipsum itaque tempore, ex cumque?</li>
                        </ul>
                    </div>
                    <div className="trip-modal-price-container">
                        <p className={tripSale ? `trip-modal-price trip-modal-sale` : `trip-modal-price` }>from ${tripPrice} {tripSale ? '(sale)' : null}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { alert('Booked!') }} className="trip-modal-button">Book Now</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default FixedTripModal