import React from 'react';
import { useState } from 'react';
import './Filter.css';
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const FilterRating = (props) => {

    const [currRating, changeRating] = useState("Show");

    const onFilterRatingValue = (event) => {
        let value = event.target.value
        props.filterMethod(value)
        changeRating(value)
    }

    return (
        <div className="filter">
            <FormControl fullWidth>
                <InputLabel id="rating-filter">Filter Rating</InputLabel>
                <Select
                    labelId="rating filter"
                    id="demo-select"
                    value={currRating}
                    label="Filter Rating"
                    onChange={onFilterRatingValue}
                >
                    <MenuItem value={"Show"}>Show all ratings</MenuItem>
                    <MenuItem value={"Excellent"}>4.5 - 5.0: Excellent</MenuItem>
                    <MenuItem value={"Great"}>4.0 - 4.5: Great</MenuItem>
                    <MenuItem value={"Good"}>3.5 - 4.0: Good</MenuItem>
                    <MenuItem value={"Fair"}>3.0 - 3.5: Fair</MenuItem>
                    <MenuItem value={"Meh"}>2.5 - 3.0: Meh</MenuItem>
                    <MenuItem value={"Unsatisfactory"}>0 - 2.5: Unsatisfactory</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterRating