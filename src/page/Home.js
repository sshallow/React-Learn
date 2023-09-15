import {useContext} from "react";
import {UserContext} from "../App";
export const Home = ({}) => {
    const {username} = useContext(UserContext);
    return (
        <div>
            <h1> This is Home Page</h1>
            <h1> my name is {username}</h1>
        </div>
    )
}