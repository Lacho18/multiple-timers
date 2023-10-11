import Timer from "./Timer";
import timersData from "./timersDataArray";
import {useState} from 'react';
import AddTimer from "./AddTimer";

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
            let newObject = object;
            newObject.id = oldArray.length + 1;
            console.log(newObject);
            oldArray.push(newObject);
            return oldArray;
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
                {timersDataState.map(indexValue => {return  <Timer key={indexValue.id} {...indexValue}  deleteTimerFunction={deleteTimer}/>})}
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