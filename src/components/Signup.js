    import * as React from 'react';
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Button from '@mui/material/Button';
import Headersign from './Headersign';
import './home/Header.css';
    
    export default function Signup() {
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
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Age" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /><br/>
            <Button variant="contained">Sign up</Button>
          </div>
          </div>
        </Box>
      );
    }
    