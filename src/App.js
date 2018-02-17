import React, { Component } from 'react'
import './App.css'
import BarChart from './BarChart'

class App extends Component {
   render() {
    return (
      <div>
        <BarChart data={[243,522,477,143,244,123,73,24,35]} size={[500,240]} />
      </div>
    )
   }
}

export default App
