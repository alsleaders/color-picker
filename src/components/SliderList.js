import React, { Component } from 'react'

class SliderList extends Component {
  state = {
    valueH: 180,
    valueS: 50,
    valueL: 50,
    valueA: 50,
    backgroundColor: ''
  }

  changeH = event => {
    // update valueH to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueH: event.target.value
    })
    console.log(this.state.valueH)
  }

  changeS = event => {
    // update valueS to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueS: event.target.value
    })
    console.log(this.state.valueS)
  }

  changeL = event => {
    // update valueH to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueL: event.target.value
    })
    console.log(this.state.valueL)
  }

  changeA = event => {
    this.setState({
      valueA: event.target.value
    })
  }
  getRandomColor = () => {
    this.setState({
      valueH: Math.floor(Math.random() * 360),
      valueS: Math.floor(Math.random() * 100),
      valueL: Math.floor(Math.random() * 100),
      valueA: Math.floor(Math.random() * 100)
    })
  }

  getBackgroundColorCss = () => {
    return `hsl(${this.state.valueH}, ${this.state.valueS}%, ${
      this.state.valueL
    }%, ${this.state.valueA}%)`
  }

  componentDidMount = () => {
    this.getRandomColor()
  }
  render() {
    return (
      <div>
        <main style={{ backgroundColor: this.getBackgroundColorCss() }}>
          <p>So many different colors! </p>
          <p>This is the hue - the value of H is {this.state.valueH}</p>
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.valueH}
            className="slider"
            id="HSlider"
            onChange={this.changeH}
          />
          <p>This is the saturation - the value of S is {this.state.valueS}%</p>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.valueS}
            className="slider"
            id="SSlider"
            onChange={this.changeS}
          />
          <p>This is the lightness - the value of L is {this.state.valueL}%</p>
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
            This is the transparency - the value of A is {this.state.valueA}%
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.valueA}
            className="slider"
            id="ASlider"
            onChange={this.changeA}
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
