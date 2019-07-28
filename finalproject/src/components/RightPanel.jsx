import React, { Component } from 'react'
import Timer from './Timer'

export default class RightPanel extends Component {
    render() {
        var { score, bonus, wordsFormed, time } = this.props.state;
        var { timeUp } = this.props
        return (
            <div className="w-50">
                <div className="scoreboard score-right">
                    <div className="th-b">SCORE: {score}</div>
                    <Timer startTime={time * 60} timeUp={timeUp} />
                    <div className="th-b">BONUS: x{bonus}</div>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-head">
                            <th className="th-a">WORDS FORMED</th>
                            <th className="th-b">SCORE</th>
                        </tr>
                    </thead>
                    <tbody className="table-body"
                    >{wordsFormed.map(word => {
                        return (
                            <tr>
                                <td>{word.word.toUpperCase()}</td>
                                <td>{word.score}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}