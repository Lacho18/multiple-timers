import {useState} from 'react';
import "./AddTimerStyle.css";
import SetTime from "./SetTime";

let objectToSend = {
    id : 0,
    name : null,
    hours : 0,
    minutes : 0,
    seconds : 0
};

export default function AddTimer(props) {
    const [currentTimeSelected, setCurrentTimeSelected] = useState("");

    function goBack() {
        props.onBack();
    }

    function addToArray() {
        let name = document.getElementById('nameField');
        let newName = name.value;
        objectToSend.name = newName;
        
        if(objectToSend.name !== null && objectToSend.name !== "") {
            props.onAddUser(objectToSend);
            goBack();
        }
    }

    function setterOfTime(timeKind) {
        setCurrentTimeSelected(timeKind);
        let setDiv = document.getElementsByClassName('set-time-div');
        setDiv[0].classList.add('set-time-div-appearence');
    }

    function afterSetTime() {
        let setDiv = document.getElementsByClassName('set-time-div');
        setDiv[0].classList.remove('set-time-div-appearence');
        let numberInput = document.getElementById("numberInput");
        let newTextValue;
        switch(currentTimeSelected) {
            case "hours" : 
            if(numberInput.value < 24) {
                objectToSend.hours = numberInput.value;
            }
            else {
                objectToSend.hours = 23;
            }
            
            newTextValue = document.getElementById('hoursParagraf');
            newTextValue.innerHTML = objectToSend.hours < 10 ? "0" +objectToSend.hours + "h" : objectToSend.hours + "h";
            break;

            case "minutes" : 
            if(numberInput.value < 60) {
                objectToSend.minutes = numberInput.value;
            }
            else {
                objectToSend.minutes = 59;
            }
           
            newTextValue = document.getElementById('minutesParagraf');
            newTextValue.innerHTML = objectToSend.minutes < 10 ? "0" +objectToSend.minutes + "m" : objectToSend.minutes + "m";
            break;

            case "seconds" : 
            if(numberInput.value < 60) {
                objectToSend.seconds = numberInput.value;
            }
            else {
                objectToSend.seconds = 59;
            }

            newTextValue = document.getElementById('secondsParagraf');
            newTextValue.innerHTML = objectToSend.seconds < 10 ? "0" +objectToSend.seconds + "s" : objectToSend.seconds + "s";
            break;
        }
    }

    return(
        <div className="add-user-main-div">
            <div className="add-user-div">
                <div className="name-div">
                    <label htmlFor="user-name">Enter username : </label>
                    <input type="text" name="user-name" id="nameField" placeholder="Enter a name for the user!" /> 
                </div>
                <div className="time-div">
                    <label>Enter begining time //optional</label>
                    <p onClick={() => {setterOfTime("hours");}} id="hoursParagraf">00h</p>
                    <p onClick={() => {setterOfTime("minutes");}} id="minutesParagraf">00m</p>
                    <p onClick={() => {setterOfTime("seconds");}} id="secondsParagraf">00s</p>
                </div>
                <button onClick={addToArray} id="addButton">Add timer</button>
            </div>
            <button onClick={goBack} id="backButton">Back</button>

            <div className="set-time-div">
                <p>Set value to {currentTimeSelected}</p>
                <input type="number" id="numberInput"/>
                <button onClick={afterSetTime}>Set time to <span style={{color : "darkred", fontWeight : "bolds"}}>{currentTimeSelected}</span></button>
                <button onClick={() => {
                    let setDiv = document.getElementsByClassName('set-time-div');
                    setDiv[0].classList.remove('set-time-div-appearence');
                }}>Cancel</button>
            </div>
        </div>
    );
}