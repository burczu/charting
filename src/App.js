import React, { Component } from "react";
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

  renderTeams() {
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
  }

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
      this.setState({newAgainst: value});
    }
  };

  onNewPointsChange = (event) => {
    const { value } = event.currentTarget;

    if (this.isNumber(value)) {
      this.setState({newPoints: value});
    }
  };

  onAddResult = () => {
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
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                      value={this.state.newName}
                      onChange={this.onNewNameChange}
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
                      value={this.state.newFor}
                      onChange={this.onNewForChange}
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
                      value={this.state.newAgainst}
                      onChange={this.onNewAgainstChange}
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
                      value={this.state.newPoints}
                      onChange={this.onNewPointsChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="button is-link" onClick={this.onAddResult}>Add result</button>

            <table className="table">
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Goals for</th>
                  <th>Goals against</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>{this.renderTeams()}</tbody>
            </table>
          </div>
          <div className="column">
            <h2 className="title is-4">Goal difference</h2>
            <BarChart width={800} height={400} data={this.state.data} margin={{ top: 20, right: 0, bottom: 60, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="difference" name="Difference" fill="#1e98fc" />
            </BarChart>
            <h2 className="title is-4">Goals for, Goals against, Difference, and Points</h2>
            <LineChart width={800} height={400} data={this.state.data} margin={{ top: 20, right: 0, bottom: 60, left: 0 }}>
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
          </div>
        </div>
      </section>
    );
  }
}

export default App;
