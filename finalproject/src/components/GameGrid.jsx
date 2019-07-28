import React, { Component } from 'react'
import Tile from './Tile'

export default class GameGrid extends Component {
    render() {
        var { alphaMatrix , 
            scoreMatrix , 
            address , 
            correct , 
            error ,
            grid , 
            wordComposed ,
            jumble
        } = this.props.state
        var { tileSelected , jumbleFn } = this.props
        return (
            <div className="grid-wrap">
                <div>WORD FORMED : {wordComposed.toUpperCase()} </div>
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
                            grid={grid}
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
                <button className="btn btn-danger btn-sm" onClick={jumble > 0 ? jumbleFn : null} disabled={!(jumble > 0)} style={{float: 'right'}}>
                    Jumble: {jumble + " Left"}
                </button>
            </div>
        )
    }
}