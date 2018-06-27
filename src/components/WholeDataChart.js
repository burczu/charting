import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WholeDataChart = (props) => {
  return [
    <h2 className="title is-4" key="whole-data-title">Goals for, Goals against, Difference, and Points</h2>,
    <LineChart key="line-chart" width={800} height={400} data={props.data} margin={{ top: 20, right: 0, bottom: 60, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="F" name="Goals for" stroke="#1e98fc" />
      <Line dataKey="A" name="Goals against" stroke="#ff3232" />
      <Line dataKey="difference" name="Difference" stroke="#59bf57" />
      <Line dataKey="Pts" name="Points" stroke="#ff9b49" />
    </LineChart>
  ];
};

WholeDataChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default WholeDataChart;
