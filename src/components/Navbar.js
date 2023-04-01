import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const navigate=useNavigate();
  const user=useSelector((state)=>state.auth.user)
  const username=useSelector((state)=>state.auth.authData.username)
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {username}
          </Typography>
         {user && <Button color="inherit" onClick={()=>navigate("/create")}>Create </Button>}
          <Button color="inherit" onClick={()=>navigate("/login")}>Login </Button>
          <Button color="inherit"  onClick={()=>navigate("/signup")}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}