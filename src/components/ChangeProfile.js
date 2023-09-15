import {useState} from "react";
import {useContext} from "react";
import {UserContext} from "../App";
export const ChangeProfile = () => {
    const {setUsername} = useContext(UserContext);
    const [newName, setNewName] = useState("");
    return (
        <div>
            {""}
            <input onChange={(event) => {setNewName(event.target.value)}}/>
            <button onClick={() => setUsername(newName)}>change name</button>
        </div>
    )
}