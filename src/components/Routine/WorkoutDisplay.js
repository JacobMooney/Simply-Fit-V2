import React from "react";
import "./Routine.css";
import WorkoutBuilder from "./WorkoutBuilder";
import OptionsForm from "./OptionsForm";
import Navbar from "../Nav/Navbar";

function WorkoutDisplay(props) {
  console.log("WorkOutDisplay -", props);
  return (
    <>
      <Navbar />
      <div className="container outerFlex">
        <OptionsForm
          formInfo={props.selectionInfo}
          handleChange={props.handleChange}
          toggleChange={props.toggleChange}
        />

        <div className="innerFlex">
          <div style={{width:'100%'}}>
            <h3>Example {props.selectionInfo.goalSelected} Workout</h3>
            <hr />
            <WorkoutBuilder selections={props.selectionInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutDisplay;
