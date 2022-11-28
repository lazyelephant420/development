import * as React from 'react';
import { useState } from 'react';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import './index.css';
import './App.css'
import data from './assets/data.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import {Typography, CardContent, CardMedia, Card, Box, Button} from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlaceIcon from '@mui/icons-material/Place';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Token for Mapbox
const TOKEN = "pk.eyJ1IjoibmFub3RhcnQiLCJhIjoiY2xheXU3ejFtMGNtcTNubjVnYWVxbDZkayJ9.3eg1MzJ5WFlKLnIFhzqF7w"

// Snackbar alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// App
function App() {

  // for the sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);
  const [lonelyMarker, updateLonelyMarker] = useState(false);
  const [buttonText, updateButtonText] = useState("Add");
  const [open, setOpen] = React.useState(false); //snackbar

  const handleClick = () => {
    setOpen(true);
    updateButtonText("Added")
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const pins = data.map((restaurant, index) => (
      <Marker
        key={index}
        longitude={restaurant.longitude}
        latitude={restaurant.latitude}
        anchor="bottom"
        onClick={e => {
          e.originalEvent.stopPropagation();
          setPopupInfo(restaurant);
        }}
      >
        <PlaceIcon sx={{color: '#74afed', height: 50, width: 50}}></PlaceIcon>
      </Marker>
  ));

  // method for returning list
  const isMine = (boolean) => {
    if (boolean === 'true') {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <PersonOutlineIcon sx={{mr:0.7}}/> 
                <span>In User's List</span>
            </div>  
        );
    } else {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <PeopleOutlineIcon sx={{mr:1}}/>
                <span>Friend's List</span>
            </div>  
        );
    }
  }  

  // method for sidebar
  const changeOpen = () => {
    setIsOpen(true)
  }

  // JSX
  return (
    
    <div className="body">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Added to user's list.
        </Alert>
      </Snackbar>
      <Topbar filterMethod={changeOpen}/>
      <Box sx={{mt: 1, alignItems:'center', display:'flex', justifyContent: 'center'}}> 
        <Map
          initialViewState={{
            latitude: 41.829234,
            longitude: -71.401003,
            zoom: 16.5,
          }}
          style={{width: "100%", height: 650, borderRadius: "20px"}} 
          mapboxAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <GeolocateControl position="top-right"/>
          <FullscreenControl position="top-right"/>
          <NavigationControl position="top-right"/>
          <ScaleControl />

          {pins}

          <Marker 
            latitude={"41.8278"} 
            longitude={"-71.4008"} 
            anchor="bottom" 
            onClick={e => {
              e.originalEvent.stopPropagation();
              updateLonelyMarker(true);
            }}>
            <PlaceIcon sx={{color: '#ed7474', height: 50, width: 50}}></PlaceIcon>
          </Marker>

          {lonelyMarker && (
            <Popup
              anchor="top"
              longitude={Number("-71.4008")}
              latitude={Number("41.8278")}
              onClose={() => updateLonelyMarker(false)}
              maxWidth='320px'
              >
                <Card variant="outlined" sx={{alignItems:'center', mt: 1, display:'flex', width: 300}}>
                  <CardMedia
                      component="img"
                      sx={{width: 100, height: 150}}
                      image="/images/Ben.jpg"
                      alt="image"/>
                  <Box sx={{display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{flex: '1 0 auto'}}>
                          <Typography component='div' variant='h6'>
                              Ben & Jerry's
                          </Typography>
                          <Typography component='div' variant='subtitle2' color="text.secondary">
                              4.2 stars
                          </Typography>
                          <Typography variant='subtitle2' color="text.secondary">
                              Not documented
                          </Typography>
                      </CardContent>
                      <Button sx={{width: 100, height: 25, ml: 2, fontSize: 15, borderRadius: "8px", 
                                   transitionDuration: "0.4s", border: "2px solid #4CAF50", backgroundColor: "white",
                                   "&:hover": {
                                    backgroundColor: "#4CAF50",
                                    color: "white"
                                    }}} 
                              onClick={handleClick}>
                              {buttonText}
                       </Button>
                  </Box>
                </Card>
              </Popup>
          )}


          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
              className="popup"
              maxWidth='320px'
            >
              <Card variant="outlined" sx={{alignItems:'center', mt: 1, display:'flex', width: 300}}>
                  <CardMedia
                      component="img"
                      sx={{width: 100, height: 150}}
                      image={popupInfo.image}
                      alt="image"/>
                  <Box sx={{display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{flex: '1 0 auto'}}>
                          <Typography component='div' variant='h6'>
                              {popupInfo.name}
                          </Typography>
                          <Typography component='div' variant='subtitle2' color="text.secondary">
                              {popupInfo.rating} stars
                          </Typography>
                          <Typography variant='subtitle2' color="text.secondary">
                              {isMine(popupInfo.mylist)}
                          </Typography>
                      </CardContent>
                  </Box>
              </Card>
            </Popup>
          )}
        </Map>
      </Box>
      
      <Sidebar {...{isOpen, setIsOpen}}/>
    </div>
  )
}

export default App;