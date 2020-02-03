import React from 'react'

class FAQQuestion extends React.Component {
    render() {
        const { questionName, questionContent, handleClick } = this.props
        return(
            <div onClick={ () => { handleClick(questionName, questionContent) } }>
                <h3>{questionName}</h3>
            </div>
        )
    }
}

export default FAQQuestion