import React, { Component } from 'react'

export default class ComponentA extends Component {
state = {}

  onChange() {
    console.log('oNChange')
    console.log(this.state)
  }
  
  render() {
    return (
      <div>ComponentA

        <button onClick={this.onChange}>click me</button>
      </div>
    )
  }
}
