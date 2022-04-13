import React from "react";
import { Link } from "react-router-dom";
import WorkoutBuilder from "./WorkoutBuilderComponent";

function WorkoutDisplay(props) {
  console.log(props.selectionInfo);
  return (
    <>
      <div>
        <div>
          <div>
            <Link to="/options">
              <button>Go Back</button>
            </Link>
            <div>
              <h3>Example {props.selectionInfo.goalSelected} Workout</h3>
            </div>
            <div>
              <WorkoutBuilder selections={props.selectionInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutDisplay;
