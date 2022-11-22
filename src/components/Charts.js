// hooks
import { useState, useEffect } from 'react';
// charts
import { Chart } from "react-google-charts";
// lodash
import _ from "lodash";

export const dataChart = [
  ["Task", "Taxa Selic Anual"],
  ["2020", 2.75],
  ["2021", 4.44],
  ["2022", 10.01]
];

const Charts = () => {

  const [chartData, setChartData] = useState([])
  const [pieChart, setPieChart] = useState(true)
  const [barChart, setBarChart] = useState(false)

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => {
        return value.year;
    });
    console.log("values", values)

    const result = _.map(values, (value, key) => {
      return [
        key, 
        _.sumBy(values[key], (value) => value.selic)
      ];
    });
    console.log("result", result);

    return [
      ["Ano", "Taxa Selic"], ...result
    ];
}

  useEffect(() => {
    const data = [
      { year: "2020", selic: 2.75 },
      { year: "2021", selic: 4.44 },
      { year: "2022", selic: 10.01 },
    ];

    setChartData(loadData(data));
  },[])

  const PieChart = () => {
    setPieChart(true)
    setBarChart(false)
  }

  const BarChart = () => {
    setBarChart(true)
    setPieChart(false)
  }

  console.log(barChart)

  return (
    <div>
      <button onClick={PieChart}>Pizza</button>
      <button onClick={BarChart}>Tabela</button>
      <Chart
        chartType={pieChart ? "PieChart" : "BarChart"}
        data={chartData}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}

export default Charts