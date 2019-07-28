/* 
This is a small scale application and so no flux architecture is used.
App Js is the starting point and the only STATE maintained in the entire application. 
The other state is TIMER so that it does not refresh the whole page.
*/

import React, { Component } from 'react'
import './App.css';
import allWords from './constants/words.json'
import HomePage from './modules/HomePage'
import PlayPage from './modules/PlayPage'
import GameOverPage from './modules/GameOverPage'
import NavBar from './common/NavBar'
import Footer from './common/Footer'
import _ from 'lodash'
import { getRndInteger, genTiles, validateSelection } from './utility'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelected: 'home',
      mode: "classic", // modes -> classic,scramble,jumparound
      time: 1,
      grid: 4,
      address: [],
      wordComposed: "",
      words: [],
      score: 0, // Total score
      error: false,
      correct: false, 
      jumble: 5,
      bonus: 1,
      wordsFormed: []
    }
  }

  /* This component is parent of all and this function works like action in a flux*/
  setStore = (o) => this.setState(o)

  /* Triggered when time is over */
  timeUp = () => {
    this.setState({pageSelected: 'gameOver'})
  }

  /* Triggered when user is unable to find word, this creates new tiles randomly */
  jumble = () => {
    var { jumble, grid } = this.state
    var { alphaMatrix, scoreMatrix } = genTiles(grid, grid)
    this.setState({
      jumble: --jumble,
      alphaMatrix,
      scoreMatrix,
      address: [],
      wordComposed: "",
    })
  }

  /* Triggered when play is clicked after selection the options  */
  play = () => {
    var { grid } = this.state
    var { alphaMatrix, scoreMatrix } = genTiles(grid, grid)
    this.setState({
      alphaMatrix,
      scoreMatrix,
      pageSelected: "play"
    })
  }

  /* This is the heart of the application triggered when a tile is selected */
  tileSelected = (rowNo, colNo) => {
    var { alphaMatrix, scoreMatrix, wordComposed, words = [], address, score, error, correct, bonus, wordsFormed, mode } = this.state

    if (error || correct) return
    if (mode !== "jumparound" && !validateSelection(rowNo, colNo, address)) return // check if neighbour tiles are selected.

    wordComposed += alphaMatrix[rowNo][colNo]
    address.push([rowNo, colNo])
    var stateObj = { address, wordComposed }

    if (wordComposed.length === 1) stateObj.words = allWords[wordComposed]
    else if (wordComposed.length >= 3) {
      var filteredWords = words.filter(word => {
        for (var letter in wordComposed) {
          if (word[letter] !== wordComposed[letter]) return false
        }
        return true
      })

      if (filteredWords.length === 0) { // Bad combination -> Reset
        stateObj.error = true
        var futureObj = {
          address: [],
          wordComposed: "",
          words: [],
          bonus: 1,
          error: false
        }
        setTimeout(() => { this.setState(futureObj) }, 500);
      }
      else {
        for (var word in filteredWords) { // Perfect match check
          if (filteredWords[word] === wordComposed) {
            if (_.includes(wordsFormed.map(o => o.word), wordComposed)) break;
            var wordScore = 0;
            alphaMatrix = _.cloneDeep(alphaMatrix)
            scoreMatrix = _.cloneDeep(scoreMatrix)
            address.forEach(rowCol => {
              wordScore += scoreMatrix[rowCol[0]][rowCol[1]]
              if (mode === "scramble") {
                alphaMatrix[rowCol[0]][rowCol[1]] = String.fromCharCode(getRndInteger(97, 123))
                scoreMatrix[rowCol[0]][rowCol[1]] = getRndInteger(1, 6)
              }
            })
            wordScore *= bonus
            bonus = bonus + 1
            score = score + wordScore
            stateObj.correct = true
            wordsFormed.push({
              word: wordComposed,
              score: wordScore
            })
            var futureObj = {
              score, alphaMatrix, scoreMatrix,
              address: [],
              wordComposed: "",
              words: [],
              correct: false,
              wordsFormed,
              bonus
            }
            setTimeout(() => { this.setState(futureObj) }, 500)
            break;
          }
        }
      }
    }
    this.setState(stateObj)
  }

  render() {
    var { state, setState } = this
    var { pageSelected , score } = state
    /* Map of all the pages */
    var page = {
      home: <HomePage state={state} setStore={this.setStore} play={this.play} />,
      play: <PlayPage state={state} jumbleFn={this.jumble} tileSelected={this.tileSelected} timeUp={this.timeUp} />,
      gameOver: <GameOverPage score={score} setStore={this.setStore} />
    }

    return (
      <div>
        <NavBar setStore={this.setStore}/>
        <div className="main">
          {page[pageSelected]}
        </div>
        <Footer />
      </div>
    )
  }
}