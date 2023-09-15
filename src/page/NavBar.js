import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to="/">Home1</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}