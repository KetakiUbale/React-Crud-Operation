import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    let history= useHistory();
const [user, setUser] = useState({
    name: "",
    discription: ""

});
const { name, discription } = user;

const onInputChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
};

const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://localhost:44377/api/book/addbook",user)
    history.push("/");
};

    return(

    <form onSubmit={e => onSubmit(e)}>
  <div className="form-group form">
  <h1>Add Users</h1>
    <label 
    className="label">Book Name :
    <input className="input-box" 
    placeholder="Enter Book Name"
    name="name"
        value={name}
        onChange={e => onInputChange(e)}
    />
    </label>
    
    </div>
<div className="form-group">
  
    <label 
    className="label">Book Discription :
    <input className="input-box" 
    placeholder="Enter Discription"
    name="discription"
        value={discription}
        onChange={e => onInputChange(e)}
    />
    </label>
    
    </div>


  <button type="submit" className="btn btn-primary">Add User</button>
</form>

    );

};
export default AddUser;