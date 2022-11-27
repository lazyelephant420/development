import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import "./Restaurants.css";

const Restaurants = (props) => {

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
    return (
        <div className="restaurants">
            {props.restaurantList.map((item, index) => {
                return (
                    <div key={index}>
                        <Card variant="outlined" sx={{alignItems:'center', mt: 1, display:'flex', width: 300}}>
                            <CardMedia
                                component="img"
                                sx={{width: 100, height: 150}}
                                image={item.image}
                                alt="image"/>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1 0 auto'}}>
                                    <Typography component='div' variant='h6'>
                                        {index + 1}: {item.name}
                                    </Typography>
                                    <Typography component='div' variant='subtitle2' color="text.secondary">
                                        {item.rating} stars
                                    </Typography>
                                    <Typography variant='subtitle2' color="text.secondary">
                                        {isMine(item.mylist)}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default Restaurants