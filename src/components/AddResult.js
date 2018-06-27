import React from 'react';
import PropTypes from 'prop-types';

const AddResult = (props) => {
  return (
    <form onSubmit={props.onAddResult}>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={props.newName}
                onChange={props.onNewNameChange}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">For</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={props.newFor}
                onChange={props.onNewForChange}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Against</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={props.newAgainst}
                onChange={props.onNewAgainstChange}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Points</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={props.newPoints}
                onChange={props.onNewPointsChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="button is-link">Add result</button>
    </form>
  );
};

AddResult.propTypes = {
  newName: PropTypes.string.isRequired,
  newFor: PropTypes.string.isRequired,
  newAgainst: PropTypes.string.isRequired,
  newPoints: PropTypes.string.isRequired,
  onNewNameChange: PropTypes.func.isRequired,
  onNewForChange: PropTypes.func.isRequired,
  onNewAgainstChange: PropTypes.func.isRequired,
  onNewPointsChange: PropTypes.func.isRequired,
  onAddResult: PropTypes.func.isRequired
};

export default AddResult;
