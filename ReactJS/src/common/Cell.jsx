import React, { Component } from 'react'

export default class Cell extends Component {

    render() {
        var {value , rowNo, cellNo, editTrigger, edit, onEdit , getValue} = this.props

        if(!edit)
        // Non Edit Mode
        return (
            <div className="wd-150 bo-grey v-center" style={{minWidth: '125px'}} onClick={() => {editTrigger(cellNo, rowNo)}}>
                {getValue(value)}
            </div>
        )
        else 
        // Edit Mode
        return (
            <div className="wd-150 bo-green v-center editorCell" style={{minWidth: '125px'}}>
                <input value={value} onChange={(e) => {onEdit(e.target.value)}}/>
            </div>
        )
    }
}