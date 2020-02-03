import React from 'react'

class ContactUs extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            subject: '',
            message: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
        if((this.state.first_name) && (this.state.last_name) && (this.state.subject) && (this.state.message) !== '') {
            alert('Message Sent!')
        } else {
            alert('Not all required fields are filled in!')
        }
    }

    render() {
        return(
            <div className="container">
                <h1 className="contact-us-title">Contact Us</h1>
                <div className="row">
                    <div className="col-lg-8 col-12 offset-lg-2">
                        <div className="row">
                            <div className="col-lg-6 col-12 contant-us-form-input-container">
                                <label className="contant-us-form-label" htmlFor="first_name">First Name</label>
                                <input onChange={(event) => { this.handleChange(event) }} type="text" name="first_name" placeholder="First name" className="contant-us-form-input" />
                            </div>
                            <div className="col-lg-6 col-12 contant-us-form-input-container">
                                <label className="contant-us-form-label" htmlFor="last_name">Last Name</label>
                                <input onChange={(event) => { this.handleChange(event) }} type="text" name="last_name" placeholder="Last name" className="contant-us-form-input" />
                            </div>
                            <div className="col-12 contant-us-form-input-container">
                                <label className="contant-us-form-label" htmlFor="subject">Subject</label>
                                <input onChange={(event) => { this.handleChange(event) }} type="text" name="subject" placeholder="Subject" className="contant-us-form-input" />
                            </div>
                            <div className="col-12 contant-us-form-input-container">
                                <label className="contant-us-form-label" htmlFor="message">Message</label>
                                <textarea onChange={(event) => { this.handleChange(event) }} placeholder="Message" className="contant-us-form-input" name="message" rows="5"></textarea>
                            </div>
                            <div className="col-12 contact-us-form-submit-button-container">
                               <button onClick={(event) => { this.handleSubmit(event) }} className="contact-us-form-submit-button" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ContactUs