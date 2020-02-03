import React from 'react'
import JourneyImage from '../images/undraw_journey_lwlj.svg'

class About extends React.Component {
    render() {
        return(
            <div className="col-12 about">
                <div className="about-middle-message">
                    <h2 className="about-middle-message-title">lorem ipsum dolor sit amet consectetur.</h2>
                    <h3 className="about-middle-message-subtitle">lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="row about-content">
                    <div className="col-lg-6 col-md-12 col-sm-12 about-l">
                        <div className="about-l-content">
                            <h3 className="about-l-title">About Us</h3>
                            <p className="about-l-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id facilis cumque veniam ipsam, suscipit vero rerum esse assumenda modi sed inventore maiores? Accusamus odit, cum quas similique deserunt, recusandae ipsam omnis perspiciatis officiis porro error fugiat minima possimus quam pariatur quasi maxime deleniti reiciendis aperiam rem quia exercitationem. Molestias asperiores exercitationem ab libero minima numquam veritatis aliquam, ea totam, dolore eligendi repellendus provident dolorum maiores nam praesentium, voluptates in architecto? Consequatur laboriosam distinctio blanditiis atque asperiores, corporis alias accusantium? Nemo consequuntur doloremque illo blanditiis iure quaerat repellat autem ipsum quis sapiente atque nesciunt voluptates minus dolore perspiciatis, earum voluptas.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 about-r">
                        <img src={JourneyImage} className="about-image" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About