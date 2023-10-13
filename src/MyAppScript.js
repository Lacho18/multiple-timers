import Timer from "./Timer";
import timersData from "./timersDataArray";
import {useState} from 'react';
import AddTimer from "./AddTimer";

const intervalRegistry = [];

export default function MyAppScript() {
    const [timersDataState, settimersDataState] = useState(timersData);
    const [buttonClicked, setButtonClicked] = useState(true);

    function showAddTimerMenu() {
        setButtonClicked((oldValue) => {
            if(oldValue) {
                oldValue = false;
            }
        })
    }

    function backToTimers() {
        setButtonClicked(true);
    }

    function addUser(object) {
        settimersDataState(oldArray => {
            const newObject = { ...object, id: oldArray.length + 1 };
            return [...oldArray, newObject];
        })
    }

    function deleteTimer(id) {
        settimersDataState(oldValue => {
            oldValue = oldValue.filter(indexValue => {
                if(indexValue.id !== id) {
                    return true;
                }
                return false;
            });

            return oldValue;
        });
    }

    if(buttonClicked) {
        return(
            <div>
                {timersDataState.map(indexValue => {return  <Timer key={indexValue.id} {...indexValue}  deleteTimerFunction={deleteTimer} inerValArray = {intervalRegistry}/>})}
                <button onClick={showAddTimerMenu} id="AddButton">Add Timer</button>
            </div>
        );
    }
    else {
        return(
            <div>
                <AddTimer onBack = {backToTimers} onAddUser = {addUser}/>
            </div>
        );
    }
}