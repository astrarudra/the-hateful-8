import React, { Component } from 'react'
import './App.css';
import allWords from './constants/words.json'
import GameGrid from './components/GameGrid'
import RightPanel from './components/RightPanel'
import HomePage from './modules/HomePage'
import PlayPage from './modules/PlayPage'

import _ from 'lodash'
import { getRndInteger, genTiles, validateSelection } from './utility'

export default class App extends Component {
  constructor(props) {
    super(props);
    var { alphaMatrix, scoreMatrix } = genTiles(5, 5)
    this.state = {
      pageSelected: 'home',
      mode: "classic", // classic , scramble
      time: 1,
      grid: 4,
      alphaMatrix,
      scoreMatrix,
      address: [],
      wordComposed: "",
      words: [],
      score: 0,
      error: false,
      correct: false,
      jumble: 5,
      bonus: 1,
      wordsFormed: []
    }
  }

  setStore = (o) => this.setState(o)

  jumble = () => {
    var { jumble } = this.state
    var { alphaMatrix, scoreMatrix } = genTiles(5, 5)
    this.setState({
      jumble: --jumble,
      alphaMatrix,
      scoreMatrix,
      address: [],
      wordComposed: "",
    })
  }

  tileSelected = (rowNo, colNo) => {
    var { alphaMatrix, scoreMatrix, wordComposed, words = [], address, score, error, correct, bonus, wordsFormed, mode } = this.state

    if (error || correct) return
    if (mode !== "playaround" && !validateSelection(rowNo, colNo, address)) return // check if neighbour tiles are selected.

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
            console.log(wordsFormed, wordComposed)
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
              wordsFormed
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
    var { pageSelected } = state
    var page = {
      home : <HomePage state={state} setStore={this.setStore} />,
      play : <PlayPage state={state} jumble={this.jumble} tileSelected={this.tileSelected} />
    }

    return (
      <div className="main">
        {page[pageSelected]}
      </div>
    )
  }
}