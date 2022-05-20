    import React,{Component} from 'react';
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Button from '@mui/material/Button';
import Headersign from './Headersign';
import './home/Header.css';
   
class Signup extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      name:'',
      age:'',
      cpassword:''
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
    let ppat ="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,14})"
    if(this.state.password==="" || !(this.state.password.match(ppat))){
      alert("enter a strong password")
    }
    if(!(this.state.password.match(this.state.cpassword))){
      alert("password and confirm password should match")
    }
    if(this.state.name==="" || this.state.age===""){
      alert("field should not be empty")
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
            <TextField id="nameinput" label="Name" variant="outlined" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
            <TextField id="ageinput" label="Age" variant="outlined" name="age" value={this.state.age} onChange={this.handleChange} /><br/>
            <TextField id="emailinput" label="Email" variant="outlined" name="email" value={this.state.emial} onChange={this.handleChange} /><br/>
            <TextField id="passwordinput" label="Password" variant="outlined" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
            <TextField id="confirmpasswordinput" label="Confirm Password" variant="outlined" name="cpassword" value={this.state.cpassword} onChange={this.handleChange} /><br/>
            <Button variant="contained" onClick={this.ValidateForm}>Sign up</Button>
          </div>
          </div>
        </Box>
      );
    }
}
export default Signup;