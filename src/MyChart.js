import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class MyChart extends Component {
  chartReference = null;

  render() {
    const data = {
      labels: this.props.data.map(obj => {
        if (obj.age === this.props.retirement) return obj.age + " (retired)";
        return obj.age;
      }),
      datasets: [
        {
          label: "Net worth (in lakhs)",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(45,242,162,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data.map(obj => obj.worth / 100000)
        },
        {
          label: "Net worth (in lakhs) {Inflation adjusted}",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data.map(obj => obj.adjusted_worth / 100000)
        }
      ]
    };

    return (
      <div>
        <h2>Retirement plan</h2>
        <Line
          ref={reference => (this.chartReference = reference)}
          ref="chart"
          data={data}
        />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    // console.log(datasets[0].data);
  }

  // componentWillUpdate() {
  //   if (typeof chartReference !== "undefined") {
  //     this.chartReference.destroy();
  //     // console.log("destroyed!");
  //   }
  // }
}
