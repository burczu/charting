import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GoalDifferenceChart = (props) => {
  return [
    <h2 className="title is-4" key="diff-title">Goal difference</h2>,
    <BarChart key="bar-chart" width={800} height={400} data={props.data} margin={{ top: 20, right: 0, bottom: 60, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="difference" name="Difference" fill="#1e98fc" />
    </BarChart>
  ];
};

GoalDifferenceChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default GoalDifferenceChart;
