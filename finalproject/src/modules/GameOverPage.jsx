import React, { Component } from 'react'
import abc from "../assets/GameOver.png"

export default class GameOverPage extends Component {
    render() {
        var { score, setStore } = this.props
        return (
            <div className="">
                <div className="gameover"><img src={abc} /></div>
                <div className="sg-c"><div className="score-go">Your Score : {score} </div></div>
                <div className="play-center"><a onClick={() => setStore({ pageSelected: 'home' })}
                    class="button glow-button">Play Again</a></div>
            </div>
        )
    }
}
