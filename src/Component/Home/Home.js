import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ExcerciesTime from '../ExcerciseTime/ExcerciseTime';
import user from '../images/user.jpg';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getFromLocalStorage, setInLocalStorage } from '../Utilities/localdb';
import './Home.css';

const Home = () => {
    const [activities,setActivities] = useState([]);
    const [totalTime,setTime] = useState([]);
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() =>{
        fetch('fakeData.json')
        .then(res =>res.json())
        .then(data => setActivities(data))
    },[]);

    useEffect(() =>{
        const timeContainer = []
        const getLocalTime = getFromLocalStorage();
        timeContainer.push(getLocalTime);
        setBreakTime(timeContainer);
    },[])
    const getTime = (times) =>{
        const newTimes = [...totalTime, times];
        setTime(newTimes);
    }
    const handleBreakTime = (time) =>{
        setBreakTime(time);
        setInLocalStorage(time);
    }
    // const toastMessage = () =>{
    //     toast('WOW YOUR EXCERCIES IS FINISHED')
    // }
    return (
        <div>
            <div className="header-title">
                <h2 className='web-title'>Daily Life Activity</h2>
            </div>
            <div className="main-container">
                <div className="card-container">
                {
                    activities.map(activity => <Activity key={activity.name}
                        activity={activity}
                        getTime={getTime}
                        ></Activity>)
                }
                </div>
                <div className="profile-container">
                    <div className="profile-name">
                        <img src={user} alt="" />
                        <p>Zahid Hossain</p>
                    </div>
                    <p className='location'>Sydney, Australia</p>
                    <div className='personal-info'>
                        <h5>W-75kg</h5>
                        <h5>H-6.2 Inch</h5>
                        <h5>Age-75kg</h5>
                    </div>
                    <div className="add-break">
                        <h2>Add A Break</h2>
                        <div className="all-btn">
                            <button onClick={() => handleBreakTime(10)} className='break-btn'>10s</button>
                            <button onClick={() => handleBreakTime(20)} className='break-btn'>20s</button>
                            <button onClick={() => handleBreakTime(30)} className='break-btn'>30s</button>
                            <button onClick={() => handleBreakTime(40)} className='break-btn'>40s</button>
                            <button onClick={() => handleBreakTime(50)} className='break-btn'>50s</button>
                        </div>
                    </div>
                    <div className="excercise">
                    <ExcerciesTime breakTime={breakTime} totalTime ={totalTime}></ExcerciesTime>
                    </div>
                    <div className="">
                    <button className='finish-btn'>Finish Excercise</button>
                    </div>
                    {/* <ToastContainer></ToastContainer> */}
                </div>
            </div>
        </div>
    );
};

export default Home;