import Tweet from "./tweets/Tweet";
import { exempleDB } from "../index";

export default function Tweets() {

    return (
        <div className="tweets">
            {
                exempleDB.map((e, i) => <Tweet key={i} data={e} />)
            }
        </div>
    )
}