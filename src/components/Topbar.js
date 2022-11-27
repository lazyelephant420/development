import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = (props) => {

    const onClick = () => {
        props.filterMethod() // call the filter method in app.js class
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{background:'#F3ECE0'}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="black"
                        aria-label="menu"
                        sx={{mr:2}}
                        onClick={onClick}
                    >
                      <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: "#505050"}}>
                        Restaurants on Thayer
                    </Typography>
                </Toolbar>
            </AppBar>
      </Box>
    );
}

export default Topbar;