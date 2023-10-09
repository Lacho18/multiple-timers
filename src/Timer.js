import {useState} from 'react';
import "./TimersStyle.css";

let intervalIsRunning = false;
let interval;
let animationInterval;

export default function Timer(props) {
    const [object, setObject] = useState(props);

    //if(intervalIsRunning == false) {
        intervalIsRunning = true;
        animationInterval = setInterval(() => {
            let objectText = document.getElementById('hours');
            objectText.classList.add('borderAnimation');
            setInterval(() => {
                objectText.classList.remove('borderAnimation');
            }, 3000);
        }, 10000);
   // }

    function selectMenuCreation(divID, value, timeType) {
        let newSelect = document.createElement('select');
        newSelect.id = "selectionMenu";
        for(let i = 0; i < value; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            newSelect.appendChild(option);
        }
        newSelect.addEventListener('change', () => {setTime(timeType, newSelect.value)});
        let mainDiv = document.getElementById(divID);
        mainDiv.appendChild(newSelect);
    }

    function setTime(kind, selectedValue) {
        console.log(kind);
        switch(kind) {
            case "hours" : setHours(selectedValue);
            break;
            case "minutes" : setMinutes(selectedValue);
            break;
            case "seconds" : setSeconds(selectedValue);
            break;
        }

        let selectMenu = document.getElementById('selectionMenu');
        let mainDiv = document.getElementById("timerRoot"+props.id);
        mainDiv.removeChild(selectMenu);
    }

    function setHours(value) {
        setObject(oldObject => {
            return {...oldObject, hours : value}
        });
    }
    function setMinutes(value) {
        setObject(oldObject => {
            return {...oldObject, minutes : value}
        });
    }
    function setSeconds(value) {
        setObject(oldObject => {
            return {...oldObject, seconds : value}
        });
    }

    function onStart() {
        let hours = object.hours;
        let minutes = object.minutes;
        let seconds = object.seconds;

        intervalIsRunning = true;
        interval = setInterval(() => {
            if(seconds > 0) {
                seconds--;
            }
            else if(minutes > 0) {
                minutes--;
                seconds = 59;
            }
            else if(hours > 0){
                hours--;
                minutes = 59;
                seconds = 59;
            }
            else {
                clearInterval(interval);
            }

            setObject(oldObject => {
                return {...oldObject, hours : hours, minutes : minutes, seconds : seconds};
            });
        }, 1000);
    }

    function onStop() {
        clearInterval(interval);
    }

    function onReset() {
        onStop();
        setObject(oldObject => {
            return {...oldObject, hours : 0, minutes : 0, seconds : 0};
        });
    }

    return(
        <div className='timers' id={"timerRoot"+props.id}>
            <h2>{object.name}</h2>
            {object.hours < 10 ? <p id='hours' onClick={() =>  selectMenuCreation("timerRoot" + props.id, 24, "hours")}>0{object.hours}h</p> 
                                : <p id='hours' onClick={() =>  selectMenuCreation("timerRoot" + props.id, 24, "hours")}>{object.hours}h</p>} 

            {object.minutes < 10 ? <p id='minutes' onClick={() =>  selectMenuCreation("timerRoot" + props.id, 60, "minutes")}>0{object.minutes}m</p> 
                                  : <p id='minutes' onClick={() =>  selectMenuCreation("timerRoot" + props.id, 60, "minutes")}>{object.minutes}m</p>} 

            {object.seconds < 10 ? <p id='seconds'  onClick={() =>  selectMenuCreation("timerRoot" + props.id, 60, "seconds")}>0{object.seconds}s</p> 
                                  : <p id='seconds' onClick={() =>  selectMenuCreation("timerRoot" + props.id, 60, "seconds")}>{object.seconds}s</p>} 

            <div id="buttonsDiv">
                <button onClick={onStart}>Start</button>
                <button onClick={onStop}>Stop</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}