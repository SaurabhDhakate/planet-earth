import React, { Component } from 'react'
import Welcome from './components/Welcome'
import './App.css'

export class App extends Component {
  render() {
    console.log("object")
    return (
      <div>
        <Welcome />
      </div>
    )
  }
}

export default App
