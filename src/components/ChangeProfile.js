import {useState} from "react";
export const ChangeProfile = (props) => {
    const [newName, setNewName] = useState("");
    return (
        <div>
            {""}
            <input onChange={(event) => {setNewName(event.target.value)}}/>
            <button onClick={() => props.click(newName)}>change name</button>
        </div>
    )
}