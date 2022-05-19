import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Headersign from './Headersign';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import './home/Header.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';

export default function Posts(){
    return(
        <div>
            <Headersign/>
            <Stack className='av' direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1652610763431-b76cf160fa70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327" sx={{ width: 56, height: 56 }}/>
            </Stack>
            <h5>Kishore</h5>
            <h5>.2d</h5><br/>
            <img src='https://images.unsplash.com/photo-1652909445392-0ac2b1463489?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872'></img>
            <br/>
            <FavoriteIcon fontSize="inherit" />
            <ShareIcon fontSize="inherit" />
            <TextField id="outlined-basic" label="comment" variant="outlined" />
        </div>
    )
}