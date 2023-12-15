import React from 'react';
import "./ToSearch.css"
import { Context } from '../Context'

function ToSearch(){
    const {searchValue, setSearchValue} = React.useContext(Context)
    return(
        <input 
            placeholder='Find your To-Do'
            className="ToSearch"
            value = {searchValue}
            onChange = {(event) =>{
            setSearchValue(event.target.value);
        }}/>
    );
}

export { ToSearch };