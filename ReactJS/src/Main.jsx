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
    if(value[0] === "="){
      console.log("THIS IS FORMULA");
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
