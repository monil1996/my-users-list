import React, { Component } from 'react'
import './App.css';
import { UserList } from "./components/UserList/UserList";
import { SearchBar } from "./components/SearchBar/SearchBar";
class App extends Component {

  state = {
    users : [],
    search : ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({users : users}));
  }
  
  render(){

    const {users , search} = this.state;
    const filteredUser = users.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    return(
      <div className = "App">
        <SearchBar placeholder = "search users" changeHandler = {e => this.setState({search : e.target.value})}/>
        <UserList users = {filteredUser}/>
      </div>
    )
  }
}

export default App;
