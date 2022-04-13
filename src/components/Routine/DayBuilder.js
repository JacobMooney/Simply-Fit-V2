import React from 'react';
import { WORKOUTLIST } from '../../shared/compoundsList';
import './Routine.css';

//Useful way of looping array around: [(props.dayNum) % legs.legs.length]
function DayRoutine (props) {
    const push = WORKOUTLIST[0];
    const pull = WORKOUTLIST[1];
    const legs = WORKOUTLIST[2];
    const abdominals = WORKOUTLIST[3];
    const compounds = WORKOUTLIST[4].exercises;
    const dayNum = props.dayNum;
    // console.log(compounds);
    if(props.goalType==='Strength'){
        return (
            <React.Fragment>
                <div className='exercise'><h5>{compounds[(dayNum) % compounds.length]}:</h5> 5 Sets x 5 Reps</div>
                <div className='exercise'><h5>{compounds[(dayNum+2) % compounds.length]}:</h5> 5 Sets x 5 Reps</div>
                <div className='exercise'><h5>{legs.exercises[(dayNum) % legs.exercises.length]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{pull.exercises[[(dayNum) % pull.exercises.length]]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{push.exercises[[(dayNum) % push.exercises.length]]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{abdominals.exercises[(dayNum) % abdominals.exercises.length]}:</h5> 3 Sets x 25-30 Reps</div>
            </React.Fragment>
        )
    }
    else if(props.goalType==='Bodybuilding'){
        return (
            <React.Fragment>
                <div className='exercise'><h5>{compounds[(dayNum) % compounds.length]}:</h5> 3 Sets of 10-12 Reps</div>
                <div className='exercise'><h5>{compounds[(dayNum+2) % compounds.length]}:</h5> 3 Sets x 10-12 Reps</div>
                <div className='exercise'><h5>{legs.exercises[(dayNum) % legs.exercises.length]}:</h5> 3 Sets x 12 Reps</div>
                <div className='exercise'><h5>{push.exercises[[(dayNum) % push.exercises.length]]}:</h5> 3 Sets x 12 Reps</div>
                <div className='exercise'><h5>{pull.exercises[[(dayNum) % pull.exercises.length]]}:</h5> 3 Sets x 12 Reps</div>
                <div className='exercise'><h5>{push.exercises[[(dayNum+2) % push.exercises.length]]}:</h5> 3 Sets x 12 Reps</div>
                <div className='exercise'><h5>{pull.exercises[[(dayNum+2) % pull.exercises.length]]}:</h5> 3 Sets x 12 Reps</div>
                <div className='exercise'><h5>{abdominals.exercises[(dayNum) % abdominals.exercises.length]}:</h5> 3 Sets x 25-30 Reps</div>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <div className='exercise'><h5>{compounds[(dayNum) % compounds.length]}:</h5> 4 Sets x 6 Reps</div>
                <div className='exercise'><h5>{compounds[(dayNum+2) % compounds.length]}:</h5> 4 Sets x 6 Reps</div>
                <div className='exercise'><h5>{push.exercises[[(dayNum) % push.exercises.length]]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{legs.exercises[(dayNum) % legs.exercises.length]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{pull.exercises[[(dayNum) % pull.exercises.length]]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{push.exercises[[(dayNum) % push.exercises.length]]}:</h5> 3 Sets x 10 Reps</div>
                <div className='exercise'><h5>{abdominals.exercises[(dayNum) % abdominals.exercises.length]}:</h5> 3 Sets x 25-30 Reps</div>
            </React.Fragment>
        )
    }
}


export default DayRoutine;