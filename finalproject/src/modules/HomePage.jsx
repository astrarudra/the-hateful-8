import React, { Component } from 'react'

export default class HomePage extends Component {

    setMode = (param) => {
        this.props.setStore({mode: param})
    }
    setTime = (param) => {
        this.props.setStore({time: param})
    }
    setGrid = (param) => {
        this.props.setStore({grid: param})
    }

    render() {
        var { setStore , state , play } = this.props
        var { mode , time , grid } = state
        var selectedClass = "selection-btn aligner selected-btn"
        var defaultClass = "selection-btn aligner"
        return (
            <div className="text-center">
                <div className="block">
                    <div className="header">Modes</div>
                    <div className="content">
                        <div className="d-flex f-center">
                            <div className={mode === "classic" ? selectedClass : defaultClass} onClick={() => this.setMode("classic")}>Classic</div>
                            <div className={mode === "scramble" ? selectedClass : defaultClass} onClick={() => this.setMode("scramble")}>Scramble</div>
                            <div className={mode === "jumparound" ? selectedClass : defaultClass} onClick={() => this.setMode("jumparound")}>Jump Around</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="header">Time</div>
                    <div className="content">   
                        <div className="d-flex f-center">
                            <div className={time === 1 ? selectedClass : defaultClass} onClick={() => this.setTime(1)}>1 min</div>
                            <div className={time === 2 ? selectedClass : defaultClass} onClick={() => this.setTime(2)}>2 min</div>
                            <div className={time === 5 ? selectedClass : defaultClass} onClick={() => this.setTime(5)}>5 min</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="header">Grid</div>
                    <div className="content">   
                        <div className="d-flex f-center">
                            <div className={grid === 4 ? selectedClass : defaultClass} onClick={() => this.setGrid(4)}>4 x 4</div>
                            <div className={grid === 5 ? selectedClass : defaultClass} onClick={() => this.setGrid(5)}>5 x 5</div>
                            <div className={grid === 6 ? selectedClass : defaultClass} onClick={() => this.setGrid(6)}>6 x 6</div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" style={{fontSize:"30px"}} onClick={play}>Play</button>
            </div>
        )
    }
}
