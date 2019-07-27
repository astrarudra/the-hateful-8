import React, { Component } from 'react'

export default class GameOverPage extends Component {
    render() {
        var { score , setStore } = this.props
        return (
            <div className="">
                <div>Game Over</div>
                <div>Your Score : {score} </div>
                <div onClick={() => setStore({pageSelected: 'home'})}>Play Again</div>
            </div>
        )
    }
}
