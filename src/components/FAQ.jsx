import React from 'react'
import FAQQuestion from './FAQQuestion'

class FAQ extends React.Component {
    constructor() {
        super()
        this.state = {
            questionName: '',
            questionContent: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClick(name, content) {
        this.setState({
            questionName: name,
            questionContent: content
        })
    }

    handleClose() {
        this.setState({
            questionName: '',
            questionContent: ''
        })
    }


    render() {
        return(
            <div className="container">
                <h1 className="faq-title">FAQs</h1>
                <div className="row">
                    <div className="col-lg-4 col-12 faq-left-container">
                        <FAQQuestion handleClick={this.handleClick} questionName="Why choose us?" questionContent="ri alias d consequatur facilis voluptates mollitia facere similique consectetur illo omnis provident tempora ratione, enim porro commodi fugiat voluptate aspernatur sed ipsum aliquam, a quaerat rem eaque suscipit! Ea, veniam voluptates similique ad architecto assumenda adipisci voluptate velit, dolore quae omnis eveniet suscipit saepe enim! Fugit fuga sapiente laboriosam cumque deserunt assumenda, ratione voluptates quae accusantium magnam alias quia vero eos id adipisci, pariatur dignissimos recusandae veniam placeat officia dicta nisi non repellat!" />
                        <FAQQuestion handleClick={this.handleClick} questionName="Lorem Ipsum 1" questionContent="Lorem ipsum dolor sit amet, consectetg elit. Reiciendis nostrum tempore assptatibus at dolore ipsa porro vero excepturi. Facere?" />
                        <FAQQuestion handleClick={this.handleClick} questionName="Lorem Ipsum 2" questionContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nostrum tempore assumenda voluptatibus at dolore ipsa porro vero excepturi. Facere?" />
                        <FAQQuestion handleClick={this.handleClick} questionName="Lorem Ipsum 3" questionContent="Lorem ipsum dolor sit amet, consecte elit. Reictrum tempore assumenda voluptatibus at dolore ipsa porro vero excepturi. Facere?" />
                        <FAQQuestion handleClick={this.handleClick} questionName="Lorem Ipsum 4" questionContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reicempore assumenda voluptatibu]ro excepturi. Facere?" />
                        <FAQQuestion handleClick={this.handleClick} questionName="Lorem Ipsum 5" questionContent="Lorem ipsum dolor sit amet, consectetur lit. Reiciendis nostrum tempore assumenda voluptatibus at dolore ipsa porro vero excepturi. Facere?" />
                    </div>
                    { this.state.questionName ? (
                        <div className="col-lg-8 faq-right-container">
                            {this.state.questionName ? <button onClick={ this.handleClose } className="faq-right-button">X</button> : null }
                            <h1 className="faq-right-name">{this.state.questionName}</h1>
                            <p className="faq-right-content">{this.state.questionContent}</p>
                        </div>
                    ) : null }
                </div>
            </div>

        )
    }
}

export default FAQ