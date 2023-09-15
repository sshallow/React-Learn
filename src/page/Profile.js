import {ChangeProfile} from "../components/ChangeProfile";

export const Profile = (props) => {
    return (
        <div>
            <h1> 个人简介</h1>
            <h2> 名字 {props.username}</h2>
            <ChangeProfile click={props.block}></ChangeProfile>
        </div>
    )
}