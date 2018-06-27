import React from 'react';
import PropTypes from 'prop-types';
import AddResultInput from './AddResultInput';

const AddResult = (props) => {
  return (
    <form onSubmit={props.onAddResult}>
      <div className="columns">
        <AddResultInput title="Name" value={props.newName} onChange={props.onNewNameChange} />
        <AddResultInput title="For" value={props.newFor} onChange={props.onNewForChange}/>
        <AddResultInput title="Against" value={props.newAgainst} onChange={props.onNewAgainstChange}/>
        <AddResultInput title="Points" value={props.newPoints} onChange={props.onNewPointsChange}/>
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
