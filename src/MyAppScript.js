import Timer from "./Timer";
import timersData from "./timersDataArray";

export default function MyAppScript() {
    return(
        <div>
            {timersData.map(indexValue => {return  <Timer {...indexValue}/>})}
        </div>
    );
}