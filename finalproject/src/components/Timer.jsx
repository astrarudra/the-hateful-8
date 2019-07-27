import React, { Component } from 'react'

var timer
export default class Timer extends Component {
    
    state = {time : this.props.startTime}
    
    componentDidMount = () => {
        timer = setInterval(this.setTime, 1000);
    }

    setTime = () => {
        var { time } = this.state
        time -= 1
        if(time === 0) {
            clearInterval(timer);
            this.props.timeUp()
        }
        else this.setState({time})
    }

    render() {
        var { time } = this.state
        return (
            <div>
                Time Left: {time}
            </div>
        )
    }
}
