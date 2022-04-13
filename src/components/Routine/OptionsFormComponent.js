import React from "react";
import { Link } from "react-router-dom";

function OptionsForm(props) {
  console.log(props);
  const currentInfo = props.formInfo;
  return (
    <div>
      <div>
        <Link to="/home">
          <button>Go Back</button>
        </Link>
      </div>
      <div>
        <div>
          <div>
            <h3>Days Per Week:</h3>
            <div>
              <button
                value={2}
                name={"daysSelected"}
                onClick={props.handleChange}
              >
                2
              </button>
              <button
                value={3}
                name={"daysSelected"}
                onClick={props.handleChange}
              >
                3
              </button>
              <button
                value={4}
                name={"daysSelected"}
                onClick={props.handleChange}
              >
                4
              </button>
            </div>
            <h5>Workout for {currentInfo.daysSelected} days a week.</h5>
          </div>
          <div>
            <h3>Training Goal:</h3>
            <div>
              <button
                value={"Strength"}
                name={"goalSelected"}
                onClick={props.handleChange}
              >
                Strength
              </button>
              <button
                value={"Bodybuilding"}
                name={"goalSelected"}
                onClick={props.handleChange}
              >
                BodyBuilding
              </button>
              <button
                value={"Hybrid"}
                name={"goalSelected"}
                onClick={props.handleChange}
              >
                Hybrid
              </button>
            </div>
            <h5>Selected: {currentInfo.goalSelected}</h5>
          </div>
          <div>
            <h3>Additional Options:</h3>
            <div>
              <button
                value={currentInfo.cardio}
                name={"cardio"}
                onClick={props.toggleChange}
              >
                Cardio
              </button>
              <button
                value={currentInfo.stretching}
                name={"stretching"}
                onClick={props.toggleChange}
              >
                Stretching
              </button>
            </div>
            <h5>
              Selected: {currentInfo.stretching ? "Stretching" : ""}{" "}
              {currentInfo.cardio ? "Cardio" : ""}
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Link to="/workoutDisplay">
            <button>View Routine</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default OptionsForm;