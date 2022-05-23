import React  from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyProfile from './MyProfile';
export default function EditProfile(){
    return(
        <>
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Profile
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstname"
                        required
                        fullWidth
                        id="firstName"
                        label="First Namee"
                        autoFocus
                      

                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastname"
                        autoComplete="family-name"
                       

                      />
                    </Grid>
                    </Grid>
              
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"

                type="password"
                id="password"
                autoComplete="current-password"

              />

              <Button variant="contained" onClick={()=>window.open("./MyProfile","_self")}>Edit</Button>
             
            </Box>
          </Box>
        </Container>
            </>
      );
    
}
