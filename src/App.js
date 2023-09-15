import './App.css';
import {User} from './User';
import {Planet} from "./Planet";
import {useEffect, useState} from "react";
import {Task} from "./Task";
import {Text} from "./Text";
import Axios from "axios";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home} from "./page/Home";
import {Menu} from "./page/Menu";
import {Contact} from "./page/Contact";
import {NotFound} from "./page/NotFound";
import {NavBar} from "./page/NavBar";
import {Profile} from "./page/Profile";
import {createContext} from "react";

export
function App() {
    const [username, setUsername] = useState("");
    const changeName = (changedName) => {
        console.log("changedName", changedName)
        setUsername(changedName);
    }
    return (
        <div className="App">
            <Router>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home username={username}/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Profile" element={<Profile block={changeName} username={username}/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/*" element={<NotFound/>}/>

                </Routes>
            </Router>
        </div>
    )
}

export default App;
