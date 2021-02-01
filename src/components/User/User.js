import React from 'react'
import './User.css'

export const User = props => (
    <div className= "user-container">
       Name : <h2> {props.user.name}</h2>
       Phone : <h4> {props.user.phone}</h4>
       Email : <h4> {props.user.email}</h4>
    </div>
)
