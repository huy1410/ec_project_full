import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,PieSeries
} from '@devexpress/dx-react-chart-material-ui';
import { fetchchart } from '../features/chart/chartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from "react";
import { Animation } from '@devexpress/dx-react-chart';
const Sales = () => {

  const chart = useSelector((state) => state.chart.chart);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchchart());
	},[dispatch]);
  const [data2, setData2] = React.useState([]);
  React.useEffect(() => {
    if (chart) {
      setData2(
        chart.map((item) => ({
          name: item.technology.name,
          value: item.number_member,
        }))
      );
    }
  }, [chart]);

  return (
  <>
 <Chart
          data={data2}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="value"
            argumentField="name"
          />
          <Title text="Biểu đồ cột" />
          <Animation />
        </Chart>
        <Chart
          data={data2}
        >
          <PieSeries
            valueField="value"
            argumentField="name"
          />
          <Title
            text="Biểu đồ tròn"
          />
          <Animation />
        </Chart>
  </>
  );
};

export default Sales;
