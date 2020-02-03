import React from 'react'
import FAQQuestion from './FAQQuestion'

class FAQ extends React.Component {
    constructor() {
        super()
        this.state = {
            questionName: '',
            questionContent: ''
        }
    }

    handleClick(name, content) {
        this.
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <FAQQuestion handleClick={this.handleClick} questionName="Why choose us?" questionContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum tempore assumenda voluptatibus at dolore ipsa porro vero excepturi. Facere?" />
                    </div>
                    <div className="col-lg-6">
                       
                    </div>
                </div>
            </div>

        )
    }
}

export default FAQ