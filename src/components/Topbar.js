import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const Topbar = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: "8px",
        boxShadow: 24,
        p: 4,
    };

    const onClick = () => {
        props.filterMethod() // call the filter method in app.js class
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{background:'#F3ECE0', borderRadius: "20px"}} position="static">
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
                    <Button
                        sx={{backgroundColor:'#E3CAA5',
                             color:'#FFFFFF',
                             '&:hover': {
                                backgroundColor: '#553939',
                                color: 'white',
                                },
                             borderRadius:"8px"
                            }}
                        onClick={handleOpen}
                    >
                        about
                    </Button>
                </Toolbar>
            </AppBar>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Development Project
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>
                        <b>Context: </b>Maps is an early concept demo restaurant navigator. It can filter and sort through 3 separate options and includes an add/delete feature as well.
                        </p>
                        <p>
                        <b>Research/Feedback: </b>I interviewed my peers from CMU and Brown University on their frustrations of looking for new restaurants. This demo serves to answer those questions by including personal recommendations.
                        </p>
                        <p>
                        <b>Design Iterations: </b>I created a map system where users can view restaurants their friends have been to. The red pin marks an unknown restaurant.
                        </p>
                        <p>
                        <b>Features: </b>Zoom in/out, find location, full screen, compass, navigation
                        </p>
                        <p>
                        <b>Skills Learned: </b>Figma, React, Material UI, Aggregation, MapBox API
                        </p>
                    </Typography>
                </Box>
            </Modal>
      </Box>
    );
}

export default Topbar;