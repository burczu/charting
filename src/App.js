import React, { Component } from "react";
import AddResult from './components/AddResult';
import Table from './components/Table';
import GoalDifferenceChart from './components/GoalDifferenceChart';
import WholeDataChart from './components/WholeDataChart';

const data = [
  { name: "Arsenal", F: 79, A: 36, Pts: 87 },
  { name: "Liverpool", F: 67, A: 30, Pts: 80 },
  { name: "Manchester_U", F: 87, A: 45, Pts: 77 },
  { name: "Newcastle", F: 74, A: 52, Pts: 71 },
  { name: "Leeds", F: 53, A: 37, Pts: 66 },
  { name: "Chelsea", F: 66, A: 38, Pts: 64 },
  { name: "West_Ham", F: 48, A: 57, Pts: 53 },
  { name: "Aston_Villa", F: 46, A: 47, Pts: 50 },
  { name: "Tottenham", F: 49, A: 53, Pts: 50 },
  { name: "Blackburn", F: 55, A: 51, Pts: 46 },
  { name: "Southampton", F: 46, A: 54, Pts: 45 },
  { name: "Middlesbrough", F: 35, A: 47, Pts: 45 },
  { name: "Fulham", F: 36, A: 44, Pts: 44 },
  { name: "Charlton", F: 38, A: 49, Pts: 44 },
  { name: "Everton", F: 45, A: 57, Pts: 43 },
  { name: "Bolton", F: 44, A: 62, Pts: 40 },
  { name: "Sunderland", F: 29, A: 51, Pts: 40 },
  { name: "Ipswich", F: 41, A: 64, Pts: 36 },
  { name: "Derby", F: 33, A: 63, Pts: 30 },
  { name: "Leicester", F: 30, A: 64, Pts: 28 }
];

class App extends Component {
  state = {
    data: data.map((item) => ({ ...item, difference: item.F - item.A })),
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
        data: [...this.state.data, { name: newName, F: newFor, A: newAgainst, Pts: newPoints, difference: newFor - newAgainst }],
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
