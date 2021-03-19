import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Navbar from "./Layout/Navbar";
import NotFound from './Pages/NotFound';
import AddUser from '../src/User/AddUser';
import EditUser from '../src/User/EditUser';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
      <Route component={NotFound}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
