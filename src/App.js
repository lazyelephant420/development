import React from 'react';
import { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  // for the sidebar
  const [isOpen, setIsOpen] = useState(false);

  // JSX
  return (
    <div className="body">
      <Box sx={{flexGrow: 1}}>
            <AppBar style={{background:'#F3ECE0'}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="black"
                        aria-label="menu"
                        sx={{mr:2}}
                        onClick={()=>setIsOpen(true)}
                    >
                      <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: "#505050"}}>
                        Restaurants on Thayer
                    </Typography>
                </Toolbar>
            </AppBar>
      </Box>
      <Sidebar {...{isOpen, setIsOpen}}/>
    </div>
  )
}

export default App;