import React, { Component } from "react";
import AddResult from './components/AddResult';
import Table from './components/Table';
import GoalDifferenceChart from './components/GoalDifferenceChart';
import WholeDataChart from './components/WholeDataChart';
import data from './data';

class App extends Component {
  state = {
    data: data.map((item) => ({ ...item, difference: Math.abs(item.F - item.A) })),
    newName: '',
    newFor: '',
    newAgainst: '',
    newPoints: ''
  };

  renderTeams = () => {
    const minValue = this.state.data.reduce((min, next) => Math.min(min, next.difference), this.state.data[0].difference);

    return this.state.data.map((result, idx) => {
      let style = {};
      if (result.difference === minValue) {
        style = {background: '#ffd182'};
      }

      return (
        <tr key={idx} style={style}>
          <td>{result.name}</td>
          <td>{result.F}</td>
          <td>{result.A}</td>
          <td>{result.Pts}</td>
        </tr>
      );
    });
  };

  isString = (value) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed)
  };

  isNumber = (value) => {
    const parsed = Number.parseInt(value, 10);
    return value === '' || Number.isNaN(parsed) === false;
  };

  onNewNameChange = (event) => {
    const { value } = event.currentTarget;

    if (this.isString(value)) {
      this.setState({ newName: value });
    }
  };

  onNewForChange = (event) => {
    const { value } = event.currentTarget;

    if (this.isNumber(value)) {
      this.setState({ newFor: value });
    }
  };

  onNewAgainstChange = (event) => {
    const { value } = event.currentTarget;

    if (this.isNumber(value)) {
      this.setState({ newAgainst: value });
    }
  };

  onNewPointsChange = (event) => {
    const { value } = event.currentTarget;

    if (this.isNumber(value)) {
      this.setState({ newPoints: value });
    }
  };

  onAddResult = (event) => {
    event.preventDefault();
    const { newName, newFor, newAgainst, newPoints } = this.state;

    if (newName !== '' && newFor !== '' && newAgainst !== '' && newPoints !== '') {
      this.setState({
        data: [...this.state.data, { name: newName, F: newFor, A: newAgainst, Pts: newPoints, difference: Math.abs(newFor - newAgainst) }],
        newName: '',
        newFor: '',
        newAgainst: '',
        newPoints: ''
      });
    }
  };

  render() {
    return (
      <section className="section">
        <h1 className="title">Premier League results</h1>
        <p className="subtitle">
          Visualization of results <strong>with React</strong>!
        </p>
        <div className="columns">
          <div className="column">
            <AddResult newName={this.state.newName}
                       newFor={this.state.newFor}
                       newAgainst={this.state.newAgainst}
                       newPoints={this.state.newPoints}
                       onNewNameChange={this.onNewNameChange}
                       onNewForChange={this.onNewForChange}
                       onNewAgainstChange={this.onNewAgainstChange}
                       onNewPointsChange={this.onNewPointsChange}
                       onAddResult={this.onAddResult}
            />
            <Table>
              {this.renderTeams()}
            </Table>
          </div>
          <div className="column">
            <GoalDifferenceChart data={this.state.data} />
            <WholeDataChart data={this.state.data} />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
