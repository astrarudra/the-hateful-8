/* 
Main is used for loading different modules 
*/

import React, { Component } from 'react';
import Cell from './common/Cell'

export default class Main extends Component {
  /* Grid Structure creating */
  componentWillMount = () => {
    var row = [], grid = [];
    for(var i = 0; i < 26; i++){
      row.push("")
    }
    for(var i = 0; i < 100; i++){
      /* Slice to remove reference */
      grid.push(row.slice())
    }
    this.setState({
      grid,
      editCellNo: undefined,
      editRowNo: undefined,
      formulaEditing: false,
    })
    console.log("Grid SetUP", grid)
  }

  /* When a cell is clicked */
  editTrigger = (editCellNo, editRowNo) => {
    this.setState({editCellNo, editRowNo})
  }

  /* When input value is entered */
  onEdit = (value) => {
    var { editCellNo , editRowNo , grid } = this.state
    grid[editRowNo][editCellNo] = value
    var formulaEditing = false
    this.setState({grid, formulaEditing})
  }

  /* Generate Value from Formulae */
  getValue = (value) => {
    var { grid } = this.state
    var formula = "", split, selectedCells, rowNo, colNo, calc = 0
    if(value[0] === "="){
      var split = value.split("(")
      formula = split[0].substring(1)
      selectedCells = split[1].substring(0, split[1].length-1).split(',') // remove last ) and split by ,

      if(formula === "SUM"){
        selectedCells.forEach(cell => {
          console.log(colNo,rowNo, calc, cell)
          colNo = cell.charCodeAt(0) - 65
          rowNo = parseInt(cell.substring(1)) - 1
          calc += parseInt(grid[rowNo][colNo])
          console.log("I AM HERE")
          console.log(cell, colNo,rowNo, calc)
        })
      }
      console.log("THIS IS FORMULA TOTAL", formula, selectedCells, calc);
      return calc
    }
    return value
  }

  render() {
    var { grid, editCellNo, editRowNo } = this.state
    var headerRow = grid[0]
    return (
      <div className="mainBody">
        {/* ABCD...Z Header*/}
        <div className="d-flex ht-25">
          <div className="cell-header" style={{minWidth: '50px'}}></div>
          {headerRow.map((cell, cellNo) => {
            return <div className="wd-150 bo-grey v-center cell-header" style={{minWidth: '125px'}}>{String.fromCharCode(cellNo + 65)}</div>
          })
          }
        </div>
        {/* Grid Code*/}
        {grid.map((row, rowNo) => {
          return (
            <div>
              <div className="d-flex ht-25">
                <div className="cell-header" style={{minWidth: '50px'}}>{rowNo + 1}</div>
                {row.map((cell, cellNo) => {
                  return <Cell 
                    value={grid[rowNo][cellNo]} 
                    rowNo={rowNo} 
                    cellNo={cellNo}
                    editTrigger={this.editTrigger}
                    onEdit={this.onEdit}
                    getValue={this.getValue}
                    edit={editCellNo === cellNo && editRowNo === rowNo}
                    />
                })}
              </div>
            </div>
          )
        })
        }
      </div>
    );
  }
}
