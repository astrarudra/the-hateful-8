import React, { Component } from 'react'
import GameGrid from '../components/GameGrid'
import RightPanel from '../components/RightPanel'

export default class PlayPage extends Component {
    render() {
        var { tileSelected , state } = this.props
        var { wordComposed } = state
        return (
            <div className="d-flex">
              <div className="w-75">
                <div>WORD FORMED : {wordComposed}</div>
                <GameGrid state={state} tileSelected={tileSelected} />
              </div>
              <RightPanel state={state} />
            </div>
        )
    }
}
