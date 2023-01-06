import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='question-title'>
                <h1>SOME QUESTION AND ANS</h1>
            </div>
            <div className='question-container'>
            <div className='question'>
                <h2>How Does React Work</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props</p>
            </div>
            <div className='question'>
                <h2>Difference Between Props And State</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='question'>
                <h2>why we use useeffect in react</h2>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
            </div>
        </div>

        </div>
    );
};

export default Question;