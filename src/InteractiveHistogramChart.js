import React, { Component } from 'react'
import './App.css'
import HistogramChart from './HistogramChart'

class InteractiveHistogramChart extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      xRange: [0, 20000],
      binCount: 100
    }
  }

  handleChange(e) {
    this.setState({binCount: e.target.value});
  }

  render() {
    const binCount = this.state.binCount;
    return(
      <div>
        <HistogramChart
          ref={node => this.node = node}
          size={this.props.size}
          data={this.props.data}
          binCount={this.state.binCount}
          xRange={this.state.xRange}
          className='histogram-chart' />
        <fieldset>
          <legend>Bin number:</legend>
          <input value={binCount} onChange={this.handleChange} />
        </fieldset>
      </div>
    )
  }
}

export default InteractiveHistogramChart
