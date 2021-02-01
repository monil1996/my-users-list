import React from 'react'
import './SearchBar.css'

export const SearchBar = props => (
    <input 
        className = "search"
        type = "search" 
        placeholder = {props.placeholder}
        onChange = {props.changeHandler}>
    </input>
)