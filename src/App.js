import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
// import LSlider from './components/LSlider'
// import SSlider from './components/SSlider'
// import HSlider from './components/HSlider'

class App extends Component {
  state = {
    valueH: 180,
    HMessage: '',
    valueS: 50,
    SMessage: '',
    valueL: 50,
    LMessage: '',
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
    // updateBackgroundColor()
  }

  changeS = event => {
    // update valueS to whatever the slider is dropped to
    console.log(event.target.value)
    this.setState({
      valueS: event.target.value,
      SMessage: event.target.value
      // backgroundColor: `hsl(${event.target.value}, 50%, 50%)`
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

  getBackgroundColorCss = () => {
    return `hsl(${this.state.valueH}, ${this.state.valueS}%, ${
      this.state.valueL
    }%)`
  }
  render() {
    return (
      <main style={{ backgroundColor: this.getBackgroundColorCss() }}>
        <HelloWorld />
        This will be the output element that changes color
        <p>This will be the text of the current color value </p>
        <p>This will be the H - the value of H is {this.state.HMessage}</p>
        <input
          type="range"
          min="0"
          max="360"
          className="slider"
          id="HSlider"
          onChange={this.changeH}
        />
        <p>This will be the S - the value of S is {this.state.SMessage}</p>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          id="SSlider"
          onChange={this.changeS}
        />
        <p>This will be the L - the value of L is {this.state.LMessage}</p>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          id="LSlider"
          onChange={this.changeL}
        />
        <p>
          This will be the <button>Random</button>
        </p>
      </main>
    )
  }
}

export default App
