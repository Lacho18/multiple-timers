import {useState} from 'react';
import "./TimersStyle.css"

export default function Timer(props) {
    const [object, setObject] = useState(props);

    return(
        <div className='timers' id="timerRoot">
            <h2>{object.name}</h2>
            {object.hours < 10 ? <p>0{object.hours}h</p> : <p>{object.hours}h</p>} 
            {object.minutes < 10 ? <p>0{object.minutes}h</p> : <p>{object.minutes}h</p>} 
            {object.seconds < 10 ? <p>0{object.seconds}h</p> : <p>{object.seconds}h</p>} 

            <div id="buttonsDiv">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
}