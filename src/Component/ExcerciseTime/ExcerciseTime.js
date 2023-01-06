import React from 'react';
const ExcerciesTime = (props) => {
    const totalTime = props.totalTime;
    const breakTime = props.breakTime;
    let totalExcTime = 0;
    for(const time of totalTime){
        const newTime = time.timeRequired;
       totalExcTime =totalExcTime + newTime;
    }
    return (
        <div>
            <h2>Excercies Details </h2>
            <p>Excercies Time : {totalExcTime}s</p>
            <p>Break Time : {breakTime}s</p>
        </div>
    );
};
 
export default ExcerciesTime;