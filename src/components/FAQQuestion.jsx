import React from 'react'

class FAQQuestion extends React.Component {
    render() {
        const { questionName, questionContent } = this.props
        return(
            <div className="faq-question-contiainer" onClick={ () => { this.props.handleClick(questionName, questionContent) } }>
                <h1 className="faq-question-title">{questionName}</h1>
            </div>
        )
    }
}

export default FAQQuestion