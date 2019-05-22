import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import SliderList from './components/SliderList'
// import LSlider from './components/LSlider'
// import SSlider from './components/SSlider'
// import HSlider from './components/HSlider'

class App extends Component {
  render() {
    return (
      <section className="center-content">
        <HelloWorld />
        <SliderList />
      </section>
    )
  }
}

export default App
