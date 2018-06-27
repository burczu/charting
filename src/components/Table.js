import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Team</th>
        <th>Goals for</th>
        <th>Goals against</th>
        <th>Points</th>
      </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
};

Table.propTypes = {
  children: PropTypes.array.isRequired
};

export default Table;
