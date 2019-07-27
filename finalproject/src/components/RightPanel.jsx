import React, { Component } from 'react'

export default class RightPanel extends Component {
    render() {
        var { score, jumble, bonus, wordsFormed } = this.props.state
        return (        
        <div className="w-50">
            <div className="right-score">
                <button className="btn btn-primary" style={{fontSize:"30px"}}onClick={jumble > 0 ? this.jumble : null} disabled={!(jumble > 0)}>Jumble: {jumble}</button>
                {/* <div>WORD : {wordComposed}</div> */}
                <div>SCORE : {score}</div>
                <div>BONUS : x{bonus}</div>
                </div>
                <div className="word-border">WORDS FORMED : SCORE 
                <div>{wordsFormed.map(word => {
                return (
                    <div className="d-flex">
                    <div>{word.word}</div>
                    <div>{word.score}</div>
                    </div>
                )
                })
                }
                </div>
            </div>
        </div>
        )
    }
}
