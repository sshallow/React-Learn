import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useEffect, useState} from "react";
import {Task} from "./Task";
import {Text} from "./Text";

function App() {

    const [showText, setShowText] = useState(false)




    const [text, setText] = useState("")

    const inputOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="App">
            <button onClick={() => setShowText(!showText)}> show text</button>
            {showText && (
                <Text inputOnChange={inputOnChange} text={text}/>
            )}

        </div>

    )
}

export default App;
