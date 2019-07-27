import React, { Component } from 'react'
import Audio from '../constants/alert.mp3';
import Sound from 'react-sound';


export default class Alert extends Component {
    state = {
        play: false
      }
      audio = new Audio(alert.mp3)
    
      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }
    
      render() {
        return (
          <div>
            <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
          </div>
        );
      }
    }