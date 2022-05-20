import React,{Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Headersign from './Headersign';
import Button from '@mui/material/Button';
import './home/Header.css';
import { Link } from "react-router-dom";

class Login extends Component{
  constructor(){
    super();
    this.state={
      email:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.ValidateForm=this.ValidateForm.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  ValidateForm(e){
     let pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
    if(this.state.email==="" || !(this.state.email.match(pattern))){
      alert("enter a valid email")
    }
  }
  render(){
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Headersign/>
            <br/>
        <div className='si'>
        <TextField id="emailinput" label="Email" variant="outlined" name="email" value={this.state.emial} onChange={this.handleChange}  /><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
        <Button variant="contained" onClick={this.ValidateForm}>Sign in</Button>
        <p><Link to='/signup'>Signup</Link></p>
        </div>
      </div>
      
    </Box>
  );
}
}
export default Login;