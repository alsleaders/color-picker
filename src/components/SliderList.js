import React, { Component } from 'react'

class SliderList extends Component {
  state = {
    valueH: 180,
    valueS: 50,
    valueL: 50,
    backgroundColor: ''
  }

  changeH = event => {
    // update valueH to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueH: event.target.value,
      HMessage: event.target.value
    })
    console.log(this.state.valueH)
  }

  changeS = event => {
    // update valueS to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueS: event.target.value,
      SMessage: event.target.value
    })
    console.log(this.state.valueS)
  }

  changeL = event => {
    // update valueH to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueL: event.target.value,
      LMessage: event.target.value
    })
    console.log(this.state.valueL)
  }

  getRandomColor = () => {
    this.setState({
      valueH: Math.floor(Math.random() * 360),
      valueS: Math.floor(Math.random() * 100),
      valueL: Math.floor(Math.random() * 100)
    })
  }

  getBackgroundColorCss = () => {
    return `hsl(${this.state.valueH}, ${this.state.valueS}%, ${
      this.state.valueL
    }%)`
  }

  componentDidMount = () => {
    this.getRandomColor()
  }
  render() {
    return (
      <div>
        <main style={{ backgroundColor: this.getBackgroundColorCss() }}>
          This will be the output element that changes color
          <p>This will be the text of the current color value </p>
          <p>This will be the hue - the value of H is {this.state.valueH}</p>
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.valueH}
            className="slider"
            id="HSlider"
            onChange={this.changeH}
          />
          <p>
            This will be the saturation - the value of S is {this.state.valueS}
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.valueS}
            className="slider"
            id="SSlider"
            onChange={this.changeS}
          />
          <p>
            This will be the lightness - the value of L is {this.state.valueL}
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.valueL}
            className="slider"
            id="LSlider"
            onChange={this.changeL}
          />
          <p>
            Would you like a{' '}
            <button onClick={this.getRandomColor}>Random</button> color?
          </p>
        </main>
      </div>
    )
  }
}

export default SliderList
