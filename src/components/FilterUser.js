import React from 'react';
import { useState } from 'react';
import './Filter.css';
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const FilterUser = (props) => {

    const [currUser, changeUser] = useState("All");

    const onFilterValue = (event) => {
        let value = event.target.value
        props.filterMethod(value) // call the filter method in app.js class
        changeUser(value)         // change the local value for this Filter class
    }

    return (
        <div className="filter">
            <FormControl fullWidth>
                <InputLabel id="example-select-label">Filter User</InputLabel>
                <Select
                    labelId="example-select-label"
                    id="demo-simple-select"
                    value={currUser}
                    label="Filter User"
                    onChange={onFilterValue}
                >
                    <MenuItem value={"All"}>All restaurants</MenuItem>
                    <MenuItem value={"User"}>User's restaurants</MenuItem>
                    <MenuItem value={"Friends"}>Friend's restaurants</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterUser;
