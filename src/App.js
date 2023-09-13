import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useEffect, useState} from "react";
import {Task} from "./Task";
import {Text} from "./Text";
import Axios from "axios";
import axios from "axios";

function App() {

    // const [catFact, setCatFact] = useState("");
    //
    // const fetchCatFact = () => {
    //     Axios.get('https://catfact.ninja/fact').then((res) => {
    //         console.log(res.data)
    //         setCatFact(res.data.fact)
    //     })
    // }
    // useEffect(() => {
    //     Axios.get('https://catfact.ninja/fact')
    //         .then((res) => {
    //                 console.log(res.data)
    //                 setCatFact(res.data.fact)
    //             }
    //         )
    // }, [])

    const [age, setAge] = useState({});
    const [name, setName] = useState({});
    const predictAge = () => {
        axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data)
            setAge(res.data)
        })
    }
    return (<div className="App">
            {/*<h1 className="title">React</h1>*/}
            {/*<button onClick={fetchCatFact}> get cat fact </button>*/}
            {/*<h3>*/}
            {/*    {catFact}*/}
            {/*</h3>*/}
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={predictAge}>预测年龄</button>
            <h1>{age?.age}岁</h1>
            <h1>{age?.count}个</h1>
        </div>

    )
}

export default App;
