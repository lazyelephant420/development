import React from 'react';
import { useState, useMemo } from 'react';
import './index.css';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import './App.css'
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from "react-map-gl";
import Box from '@mui/material/Box';
import data from './assets/data.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = "pk.eyJ1IjoibmFub3RhcnQiLCJhIjoiY2xheXU3ejFtMGNtcTNubjVnYWVxbDZkayJ9.3eg1MzJ5WFlKLnIFhzqF7w"

function App() {
  // for the sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(() => data.map((restaurant, index) => (
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
      </Marker>
    )));

  // console.log(pins)

  // method for sidebar
  const changeOpen = () => {
    setIsOpen(true)
  }

  // JSX
  return (
    <div className="body">
      <Topbar filterMethod={changeOpen}/>
      <Box sx={{mt: 1, alignItems:'center', display:'flex', justifyContent: 'center'}}> 
        <Map 
          initialViewState={{
            latitude: 41.829234,
            longitude: -71.401003,
            zoom: 15,
          }}
          style={{width: "100%", height: 650, borderRadius: "15px"}} 
          mapboxAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          
          {pins}
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
              className="popup"
            >
              <Card variant="outlined" sx={{alignItems:'center', mt: 1, display:'flex', width: 220}}>
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
                      </CardContent>
                  </Box>
              </Card>
              
            </Popup>
          )
          }

        </Map>
      </Box>
      
      <Sidebar {...{isOpen, setIsOpen}}/>
    </div>
  )
}

export default App;