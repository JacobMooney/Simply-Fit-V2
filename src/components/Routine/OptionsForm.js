import React from "react";
import "./Routine.css";

function OptionsForm(props) {
  const currentInfo = props.formInfo;
  return (
    <div className="innerFlex">
      <div>
        <h3>Days Per Week:</h3>
        <div className="btnGroup">
          <button className="optionBtn" value={2} name={"daysSelected"} onClick={props.handleChange}>
            2
          </button>
          <button className="optionBtn" value={3} name={"daysSelected"} onClick={props.handleChange}>
            3
          </button>
          <button className="optionBtn" value={4} name={"daysSelected"} onClick={props.handleChange}>
            4
          </button>
        </div>
        <h5>Workout for {currentInfo.daysSelected} days a week.</h5>
      </div>
      <div>
        <h3>Training Goal:</h3>
        <div className="btnGroup">
          <button
            className="optionBtn"
            value={"Strength"}
            name={"goalSelected"}
            onClick={props.handleChange}
          >
            Strength
          </button>
          <button
            className="optionBtn"
            value={"Bodybuilding"}
            name={"goalSelected"}
            onClick={props.handleChange}
          >
            BodyBuilding
          </button>
          <button
            className="optionBtn"
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
        <div className="btnGroup">
          <button
            className="optionBtn"
            value={currentInfo.cardio}
            name={"cardio"}
            onClick={props.toggleChange}
          >
            Cardio
          </button>
          <button
            className="optionBtn"
            value={currentInfo.stretching}
            name={"stretching"}
            onClick={props.toggleChange}
          >
            Stretching
          </button>
        </div>
        <h5>
          Selected: {currentInfo.stretching ? "Stretching" : ""}
          {currentInfo.stretching && currentInfo.cardio ? " & " : ""}
          {currentInfo.cardio ? "Cardio" : ""}
        </h5>
      </div>
    </div>
  );
}
export default OptionsForm;
