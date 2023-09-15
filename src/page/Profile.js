import {ChangeProfile} from "../components/ChangeProfile";
import {useContext} from "react";
import {UserContext} from "../App";

export const Profile = () => {
    const {username} = useContext(UserContext);
    return (
        <div>
            <h1> 个人简介</h1>
            <h2> 名字 {username}</h2>
            <ChangeProfile ></ChangeProfile>
        </div>
    )
}