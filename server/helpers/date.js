/**
 * Helpers for time and date manipulation
 */

const getDataObject = () => {
    return new Date();
};

const getCurrentTime = () => {

    let date = getDataObject();

    let hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    let min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    let sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return `${hour}:${min}:${sec}`;
};

module.exports.getCurrentTime = getCurrentTime;