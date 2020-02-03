import React from 'react'
import { Modal } from 'react-bootstrap'

class FixedTripModal extends React.Component {

    // , tripPrice, tripBackgroundUrl, tripSale
    render() {
        const { tripName, tripDescription, showModal } = this.props
        return(
            <Modal show={showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{tripName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{tripDescription}</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default FixedTripModal