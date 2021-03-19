import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home=()=>{
    const [users, setUser]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[]) ;

    const loadUsers= async () => {
        const result = await axios.get("https://localhost:44377/api/book/getallbooks");
        setUser(result.data);
    }
    


    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { users.map((user, index) => (
          <tr>
          <th scope="row">{index +1}</th>
           <td>{user.id}</td>
          
          <td>{user.name}</td>
          <td>{user.description}</td>
          <td>
              <Link className="btn btn-primary mr-2">View</Link>
              
              <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
              Edit</Link>
              <Link className="btn btn-danger">Delete</Link>
    
          </td>
          </tr>
      ))
  }
    
  </tbody>
</table>


            </div>
        </div>
    )
}
export default Home;