import React from "react";
import { Drawer, styled, Typography, IconButton} from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

import { useState } from 'react';
import data from "../assets/data.json";
import Restaurants from "./Restaurants.js";
import FilterUser from "./FilterUser.js";
import FilterRating from "./FilterRating.js";
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
}))

const Sidebar = ({isOpen, setIsOpen}) => {
    const newData = data
    const [currView, updateView] = useState('All');
    const [currRating, updateRating] = useState('Show');

    // Filters
    const filteredList = newData.filter((restaurant) => {
        if (currView === 'All') {
        switch(currRating) {
            case 'Show':
                return restaurant
            case 'Excellent':
                return restaurant.rating >= 4.5
            case 'Great':
                return  restaurant.rating >= 4.0 && restaurant.rating < 4.5 
            case 'Good':
                return restaurant.rating >= 3.5 && restaurant.rating < 4.0  
            case 'Fair':
                return restaurant.rating >= 3.0 && restaurant.rating < 3.5 
            case 'Meh':
                return restaurant.rating >= 2.5 && restaurant.rating < 3.0
            case 'Unsatisfactory':
                return restaurant.rating >= 0 && restaurant.rating < 2.5
            default:
                return restaurant
        }
        } else if (currView === 'User') {
        switch(currRating) {
            case 'Show':
                return restaurant && restaurant.mylist === "true"
            case 'Excellent':
                return restaurant.rating >= 4.5 && restaurant.mylist === "true"
            case 'Great':
                return  restaurant.rating >= 4.0 && restaurant.rating < 4.5 && restaurant.mylist === "true"
            case 'Good':
                return restaurant.rating >= 3.5 && restaurant.rating < 4.0 && restaurant.mylist === "true"
            case 'Fair':
                return restaurant.rating >= 3.0 && restaurant.rating < 3.5 && restaurant.mylist === "true"
            case 'Meh':
                return restaurant.rating >= 2.5 && restaurant.rating < 3.0 && restaurant.mylist === "true"
            case 'Unsatisfactory':
                return restaurant.rating >= 0 && restaurant.rating < 2.5 && restaurant.mylist === "true"
            default:
                return restaurant
        }
        } else {
        switch(currRating) {
            case 'Show':
                return restaurant && restaurant.mylist === "false"
            case 'Excellent':
                return restaurant.rating >= 4.5 && restaurant.mylist === "false"
            case 'Great':
                return  restaurant.rating >= 4.0 && restaurant.rating < 4.5 && restaurant.mylist === "false"
            case 'Good':
                return restaurant.rating >= 3.5 && restaurant.rating < 4.0 && restaurant.mylist === "false"
            case 'Fair':
                return restaurant.rating >= 3.0 && restaurant.rating < 3.5 && restaurant.mylist === "false"
            case 'Meh':
                return restaurant.rating >= 2.5 && restaurant.rating < 3.0 && restaurant.mylist === "false"
            case 'Unsatisfactory':
                return restaurant.rating >= 0 && restaurant.rating < 2.5 && restaurant.mylist === "false"
            default:
                return restaurant
        }
        }
    })

    // method for filtering between users
    // views range from: "All", "User", "Friends"
    // refer to FilterUser.js
    const setCurrentView = (new_view) => {
        updateView(new_view)
    }

    // method for filtering between ratings
    // ratings range from: "Excellent", "Good", "Fair", "Bad", "Unsatisfactory"
    // refer to FilterRating.js
    const setCurrentRating = (new_rating) => {
        updateRating(new_rating)
    }

    return (
        <Drawer 
            variant='persistent' 
            hideBackdrop={true} 
            open={isOpen}
        >
            <DrawerHeader>
                <Typography sx={{ml: 6, color: "#505050"}} component='div' variant='h4'>Restaurants</Typography>
                <IconButton onClick={() => setIsOpen(false)}>
                    <ChevronLeft fontSize='large'/>
                </IconButton>
            </DrawerHeader>
            <Box sx={{width:300, p:2}}>
                <Grid2 container spacing={2}>
                    <Grid2 xs={6}>
                        <FilterRating filterMethod={setCurrentRating}></FilterRating>
                    </Grid2>
                    <Grid2 xs={6}>
                        <FilterUser filterMethod={setCurrentView}></FilterUser>
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{width: 300}}>
                <Restaurants restaurantList={filteredList}></Restaurants>
            </Box>

        </Drawer>
    );
};

export default Sidebar;
