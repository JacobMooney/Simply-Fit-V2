import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Education from "./Education/Education";
import HomePage from "./HomePage/HomePage";
import Nutrition from "./Nutrition/Nutrition";
import OptionsForm from "./Routine/OptionsFormComponent";
import WorkoutDisplay from './Routine/WorkoutDisplayComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysSelected: 3,
      goalSelected: "Hybrid",
      cardio: false,
      stretching: false,
    };
    this.toggleChangeHandler = this.toggleChangeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  toggleChangeHandler(event) {
    const { name, value } = event.target;
    value === "false"
      ? this.setState({ [name]: true })
      : this.setState({ [name]: false });
  }

  render() {
    return (
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/nutrition" exact component={Nutrition} />
        <Route path="/education" exact component={Education} />
        <Route
          exact
          path="/options"
          render={() => (
            <OptionsForm
              formInfo={this.state}
              handleChange={this.handleChange}
              toggleChange={this.toggleChangeHandler}
            />
          )}
        />
        <Route
          exact
          path="/workoutDisplay"
          render={() => <WorkoutDisplay selectionInfo={this.state} />}
        />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default MainComponent;
