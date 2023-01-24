import React from "react";
import { Input,Label } from "./Filter.styled";
import PropTypes from 'prop-types';




export const  Filter=({value, onChange})=> {
    return (
        <form> 
            <Label>Find contacts by name</Label>
            <Input type="text" name="filter" value={value} onChange={onChange} />
        </form>
    )
}

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired
};

export default Filter;