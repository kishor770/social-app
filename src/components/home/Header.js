import { Link } from "react-router-dom";
import './Header.css';
export default function Header(){
    return(
        <div className="he">
            <p>Social Connect</p>
            <p className="hi"><Link to='/login'>Login</Link></p>
            <p className="hia"><Link to='/signup'>Signup</Link></p>
        </div>
    )
}