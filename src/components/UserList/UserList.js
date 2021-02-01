import React from 'react'
import { User } from '../User/User'
import './UserList.css'

export const UserList = props => (
    <div className= "user-list">
        {props.users.map(x => <div key = {x.id}><User user = {x}/></div>)}
    </div>
)