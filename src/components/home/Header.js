import { Link } from "react-router-dom";
import './Header.css';
export default function Header(){
    return(
        <div className="he">
            <p>Social Connect</p>
            <p className="hi"><Link to='/login'>Login</Link></p>
            <p className="hia"><Link to='/signup'>Signup</Link></p>
            <p className="hias"><Link to='/posts'>Posts</Link></p>
            <p className="hiast"><Link to='/myProfile'>MyProfile</Link></p>
        </div>
    )
}