import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const SortRating = (props) => {

    const [sortValue, changeSortValue] = useState("Highest");

    const onSortValue = (event) => {
        let value = event.target.value
        props.filterMethod(value)
        changeSortValue(value)
    }

    return (
        <div className="filter">
            <FormControl fullWidth>
                <InputLabel id="sort-rating-filter">Sort Ratings</InputLabel>
                <Select
                    labelId="sort-rating-filter"
                    id="demo-select"
                    value={sortValue}
                    label="Sort Ratings"
                    onChange={onSortValue}
                >
                    <MenuItem value={"Highest"}>Ratings: Highest to Lowest</MenuItem>
                    <MenuItem value={"Lowest"}>Ratings: Lowest to Highest</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SortRating