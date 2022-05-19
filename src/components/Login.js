
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Headersign from './Headersign';
import Button from '@mui/material/Button';
import './home/Header.css';

export default function Login() {
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
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
        <Button variant="contained">Sign up</Button>
        </div>
      </div>
      
    </Box>
  );
}