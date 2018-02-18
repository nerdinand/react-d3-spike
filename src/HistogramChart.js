import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max, histogram } from 'd3-array'
import { select } from 'd3-selection'
import { axisBottom } from 'd3-axis'


class HistogramChart extends Component {
  constructor(props){
    super(props)
    this.createHistogramChart = this.createHistogramChart.bind(this)
  }

  componentDidMount() {
    this.createHistogramChart()
  }

  componentDidUpdate() {
    this.createHistogramChart()
  }

  createHistogramChart() {
    const node = select(this.node);
    const margin = {top: 30, right: 30, bottom: 45, left: 30};
    const g = node.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    const width = +this.props.size[0] - margin.left - margin.right;
    const height = +this.props.size[1] - margin.top - margin.bottom;

    const data = this.props.data
    const xRange = this.props.xRange
    const binCount = this.props.binCount

    const xScale = scaleLinear()
      .domain(xRange)
      .range([0, width])

    const bins = histogram()
      .domain(xScale.domain())
      .thresholds(xScale.ticks(binCount))(data);

    const dataCount = data.length
    const dataCountInHistogram = bins.map(b => b.length).reduce((a, b) => a + b)

    const binWidth = bins[0].x1 - bins[0].x0;

    const yScale = scaleLinear()
      .domain([0, max(bins, d => d.length)])
      .range([height, 0])

    const bar = g.selectAll('.bar')
      .data(bins)
      .enter().append('g')
        .attr('class', 'bar')
        .attr('transform', d => 'translate(' + xScale(d.x0) + ',' + yScale(d.length) + ')');

    bar.append('rect')
      .attr('x', 1)
      .attr('width', xScale(binWidth) - 1)
      .attr('height', d => height - yScale(d.length));

    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(axisBottom(xScale));

    g.append('text')
      .attr('class', 'histogram-title')
      .attr('text-anchor', 'middle')
      .attr('y', 0)
      .attr('x', width / 2)
      .text('Sum histogram')

    g.append('text')
      .attr('class', 'histogram-description')
      .attr('text-anchor', 'middle')
      .attr('y', height + 40)
      .attr('x', width / 2)
      .text('Total: ' + dataCount + ', In histogram: ' + dataCountInHistogram)
    }

  render() {
    return <svg
      ref={node => this.node = node}
      width={this.props.size[0]}
      height={this.props.size[1]}
      className='histogram-chart' />
  }
}

export default HistogramChart
