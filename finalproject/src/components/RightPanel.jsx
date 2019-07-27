import React, { Component } from 'react'

export default class RightPanel extends Component {
    render() {
        var { score, jumble, bonus, wordsFormed } = this.props.state;
        return (
            <div className="w-50">
                <div className="right-score">
                    <div className="score-right">SCORE: {score}</div>
                    <div>BONUS: x{bonus}</div>
                    <button className="btn btn-primary btn-sm m-3" onClick={jumble > 0 ? this.jumble : null} disabled={!(jumble > 0)}>Jumble: {jumble}</button>
                </div>

                <div class="container">
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
            </div>
        )
    }
}