// import eslint-disable-next-line;
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { Container } from "react-bootstrap";
import Activities from './Activities';
import Register from './Register';
import Login from './Login';
import Reset from './Reset';
import Dashboard from './Dashboard';
import Blogs from './Blogs';
import Create from './Create';
import Home from './Home';
import PostDetails from "./PostDetails";
// import { AuthProvider } from "../context/AuthContext";

class Header extends React.Component {
    render(){
    return(
    <Router>
        <header>
      <nav class="nav">
      <div class="container">
          <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                  <li><Link to="/">Home</Link></li>
                  <li><a href="quiz.html">Quizzes</a></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><a href="dist/chat.html">Chat!</a></li>
                  <li><Link to="/Register">Sign Up</Link></li>

              </ul>
          </div>
          <span class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
          </span>
      </div>
  </nav>
  </header>
  {/* <div style= {{marginTop:'15rem'}}></div> */}
  <Switch>
  <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/activities"><Activities /></Route>
      <Route path="/blogs"><Blogs /></Route>
      <Route path="/create"><Create /></Route>
      <Route path="/post/:postId" component={PostDetails} />
      <Route exact path="/"><Home /></Route>
  </Switch>
  </Router>
    );
}
}

export default Header;