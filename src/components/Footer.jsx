import React from 'react'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12 footer-section">
                            <h1 className="footer-title">About Us (again)</h1>
                            <p className="footer-text">Lorem ipsum dolor sit amet.</p>
                            <div className="footer-indent">
                                <h4 className="footer-subtitle">Address:</h4>
                                <p className="footer-text">891 East Laurel Dr.Winona, MN 55987</p>
                                <h4 className="footer-subtitle">Questions?</h4>
                                <p className="footer-text">lorem.ipsum@gmail.com</p>
                                <h4 className="footer-subtitle">Contact Us:</h4>
                                <p className="footer-text">+44748394583</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 footer-section">
                            <h1 className="footer-title">Lorem</h1>
                            
                            
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 footer-section">
                            <h1 className="footer-title">Ipsum</h1>
                            <p className="footer-text">This is a footer.</p>
                            
                            
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 footer-section">
                            <h1 className="footer-title">Something</h1>
                            <p className="footer-text">Made by meee</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer