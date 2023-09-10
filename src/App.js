import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const setCountToZero = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={setCountToZero}>Set to zero</button>
           <h1> {count}</h1>
        </div>
    )
}

export default App;
