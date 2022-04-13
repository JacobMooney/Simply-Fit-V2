import React from 'react';
import DayRoutine from './RoutineComponent';


function CardioOption({ option }) {
    if (option) {
        return (
            <h5>
                Cardio - 10 min
            </h5>
        )
    }
    return (
        <div />
    );
}
function StretchingOption({ option }) {
    if (option) {
        return (
            <h5>
                Stretching - 10 min
            </h5>
        )
    }
    return (
        <div />
    );
}

function NumOfDays({ selections }) {
    const nDays = [];
    for (let i = 0; i < selections.daysSelected; i++) {
        nDays.push(
            <div>
                <div>
                    <h3>Workout: {i + 1}</h3>
                    <ul>
                        <CardioOption option={selections.cardio} />
                        <DayRoutine id={i} dayNum={i + 1} goalType={selections.goalSelected} selections={selections} />
                        <StretchingOption option={selections.stretching} />
                    </ul>
                </div>
            </div>
        );
    }
    return nDays;
}

function WorkoutBuilder(props) {
    const selections = props.selections;
    return (
        <>
            <NumOfDays selections={selections} />
        </>

    );
}


export default WorkoutBuilder;