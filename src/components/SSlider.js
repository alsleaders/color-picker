import React, { Component } from 'react'

class SSlider extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="100"
          // value="50"
          className="slider"
          id="SSlider"
        />
      </div>
    )
  }
}

export default SSlider
