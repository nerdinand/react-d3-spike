import React, { Component } from 'react'
import './App.css'
import HistogramChart from './HistogramChart'

class App extends Component {
   render() {
    return (
      <div>
        <HistogramChart data={[243,522,477,143,244,123,73,24,35]} size={[500,300]} />
      </div>
    )
   }
}

export default App
