import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useState} from "react";

function App() {

    // const [age, setAge] = useState(21)
    const [inputValue, setInputValue] = useState("")

    // const increaseAge = () => {
    //     setAge(age - 1)
    // }

    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="App">
           {/* //{age}*/}
           {/* //<button onClick={increaseAge}> Increase Age</button>*/}
           <input type="text" onChange={onChange}/>
            <h1>

                {inputValue}
            </h1>
        </div>
    )
}

export default App;
