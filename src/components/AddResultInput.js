import React from 'react';
import PropTypes from 'prop-types';

const AddResultInput = (props) => {
  return (
    <div className="column">
      <div className="field">
        <label className="label" htmlFor={`input-${props.title}`}>{props.title}</label>
        <div className="control">
          <input
            id={`input-${props.title}`}
            className="input"
            type="text"
            placeholder="Text input"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

AddResultInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddResultInput;
