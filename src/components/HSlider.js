import React, { Component } from 'react'

class HSlider extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          min=""
          max="360"
          // value="180"
          className="slider"
          id="HSlider"
          // onChange={this.changeValue}
        />
      </div>
    )
  }
}

export default HSlider
