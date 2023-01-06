const setInLocalStorage = (times) =>{
    localStorage.setItem('time' , JSON.stringify(times));
}


const getFromLocalStorage = (times)=>{
    const getTime = localStorage.getItem('time');
    return getTime;
}

export {
    setInLocalStorage,
    getFromLocalStorage
}