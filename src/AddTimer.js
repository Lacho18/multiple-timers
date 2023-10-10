import "./AddTimerStyle.css";

export default function AddTimer(props) {

    function goBack() {
        props.onBack();
    }

    function addToArray() {
        let name = document.getElementById('nameField');
        let newName = name.value;
        let newObject = {
            id : 0,
            name : newName,
            hours : 0,
            minutes : 0,
            seconds : 0
        };

        props.onAddUser(newObject);
        goBack();
    }

    return(
        <div className="add-user-main-div">
            <div className="add-user-div">
                <div className="name-div">
                    <label htmlFor="user-name">Enter username : </label>
                    <input type="text" name="user-name" id="nameField"/>
                </div>
                <div className="time-div">
                    <label>Enter begining time //optional</label>
                    <p>00h</p> <p>00m</p> <p>00s</p>
                </div>
                <button onClick={addToArray} id="addButton">Add timer</button>
            </div>
            <button onClick={goBack} id="backButton">Back</button>
        </div>
    );
}