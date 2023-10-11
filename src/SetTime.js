import "./AddTimerStyle.css";

export default function SetTime() {

    return(
        <div className="set-time-div">
            <p>Set value to </p>
            <input type="number" />
            <button>Set time to</button>
            <button>Cancel</button>
        </div>
    );
}