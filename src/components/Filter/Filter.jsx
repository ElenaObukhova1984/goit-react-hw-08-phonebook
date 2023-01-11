import React from "react";
import { nanoid } from 'nanoid';
import { Input,Label } from "./Filter.styled";
import PropTypes from 'prop-types';


const filterId = nanoid();

export const  Filter=({value, onChange})=> {
    return (
        <form> 
            <Label htmlFor={filterId}>Find contacts by name</Label>
            <Input id={filterId} type="text" name="filter" value={value} onChange={onChange} />
        </form>
    )
}

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired
};

export default Filter;