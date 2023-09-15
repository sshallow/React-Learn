import './App.css';
import {createContext, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./page/Home";
import {Menu} from "./page/Menu";
import {Contact} from "./page/Contact";
import {NotFound} from "./page/NotFound";
import {NavBar} from "./page/NavBar";
import {Profile} from "./page/Profile";

export const UserContext = createContext();

function App() {
    const [username, setUsername] = useState("43211");
    return (
        <div className="App">
            <UserContext.Provider value={{username,setUsername}}>
                <Router>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/Menu" element={<Menu/>}/>
                        <Route path="/Profile" element={<Profile />}/>
                        <Route path="/Contact" element={<Contact/>}/>
                        <Route path="/*" element={<NotFound/>}/>

                    </Routes>
                </Router>
            </UserContext.Provider>
        </div>
    )
}

export default App;
