import React, { Component } from 'react'
import Tile from './Tile'

export default class GameGrid extends Component {
    render() {
        var { alphaMatrix , 
            scoreMatrix , 
            address , 
            correct , 
            error ,
        } = this.props.state
        var { tileSelected } = this.props
        return (
            <div>
                {alphaMatrix.map((row, rowNo) => {
                    return (
                    <div className="d-flex">
                    {row.map((tile, colNo) => {
                        var selected = false
                        address.forEach(rowCol => {
                            if(rowCol[0] === rowNo && rowCol[1] === colNo){
                            selected = true;
                            }
                        })
                        return <Tile tile={tile} 
                            selected={selected} 
                            correct={correct} 
                            error={error} 
                            onClick={() => tileSelected(rowNo, colNo)}
                            letter={tile.toUpperCase()}
                            score={scoreMatrix[rowNo][colNo]}
                            />
                        })
                    }
                    </div>
                    )
                })
                }
            </div>
        )
    }
}