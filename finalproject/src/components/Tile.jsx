import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        var { selected , correct, error , onClick , letter , score } = this.props
        var tileClass = "tile aligner "

        if(selected) {
            tileClass += "selected "
            if(error) tileClass += "error "
            if(correct) tileClass += "correct "
        }
        
        return (
            <div className={tileClass} onClick={selected ? null : onClick}>
                <div className="score">{score}</div> {letter}
            </div>
        )
    }
}
