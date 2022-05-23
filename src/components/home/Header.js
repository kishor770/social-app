import { Link } from "react-router-dom";
import './Header.css';
 function Header(props){
    
        if(props.islog==="true"){
            return(
            <div className="he">
            <p>Social Connect</p>
            <p className="hi"><Link to='/login'>Login</Link></p>
            <p className="hia"><Link to='/signup'>Signup</Link></p>
            <p className="hias"><Link to='/posts'>Posts</Link></p>
            <p className="hiast"><Link to='/MyProfile'>MyProfile</Link></p>
        </div>
        )
    }
    else{
        return(
        <h1>no</h1>
        )
    }
        

}
export default Header;