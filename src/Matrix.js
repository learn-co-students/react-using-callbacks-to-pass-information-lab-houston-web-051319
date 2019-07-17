import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state={
      selectedColor: "#000"
    }

  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} change={this.newColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleChange={this.handleChange}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

  handleChange = (str) =>{
    this.setState({ selectedColor: str })
  }

  newColor = () => this.state.selectedColor

}

Matrix.defaultProps = {
  values: chromeBoi
}
