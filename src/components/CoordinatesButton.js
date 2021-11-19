// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton extends React.Component {

  onClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return <button onClick={this.onClick}>Find the Coords</button>
  }
}