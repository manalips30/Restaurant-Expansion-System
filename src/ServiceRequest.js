import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

class ServiceRequest extends React.Component {
  state = {
    chartData: {}
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    lengendPosition: 'right'
  }

  componentDidMount() {
    this.setState({})
  }

  render() {
    return (
      <div className="ServiceRequest">
        <div className="chart">

          <Doughnut
            data={this.state.chartData}
            width={40}
            height={10}
            postion="left"
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Language Based Analysis',
                fontSize: 20
              },
              lengend: {
                display: this.props.displayLegend,
                positon: this.props.lengendPosition
              },
              animationEnabled: true,
              theme: "dark2"
            }}
          />
        </div>
      </div>
    )
  }
}

export default ServiceRequest;