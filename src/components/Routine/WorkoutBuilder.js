import React from 'react';
import DayRoutine from './DayBuilder';
import './Routine.css';


function CardioOption({ option }) {
    if (option) {
        return (
            <div className='exercise'>
                <h5>
                    Cardio - 10 min
                </h5>
            </div>
        )
    }
    return (
        <></>
    );
}
function StretchingOption({ option }) {
    if (option) {
        return (
            <div className='exercise'>
                <h5>
                    Stretching - 10 min
                </h5>
            </div>
        )
    }
    return (
        <></>
    );
}

function NumOfDays({ selections }) {
    const nDays = [];
    for (let i = 0; i < selections.daysSelected; i++) {
        nDays.push(
            <>
                <div className='day'>
                    <h3 className='dayHeader'>Workout: {i + 1}</h3>
                    <ul>
                        <CardioOption option={selections.cardio} />
                        <DayRoutine id={i} dayNum={i + 1} goalType={selections.goalSelected} selections={selections} />
                        <StretchingOption option={selections.stretching} />
                    </ul>
                </div>
            </>
        );
    }
    return nDays;
}

function WorkoutBuilder(props) {
    const selections = props.selections;
    return (
        <div className='daysFlex'>
            <NumOfDays selections={selections} />
        </div>

    );
}


export default WorkoutBuilder;