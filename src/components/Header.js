// import eslint-disable-next-line;
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Activities from './Activities';
import Blogs from './Blogs';
import Create from './Create';
import Home from './Home';
import PostDetails from "./PostDetails";

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
                  <li><a href="login.html">Sign Up</a></li>

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
      <Route path="/activities"><Activities /></Route>
      <Route path="/blogs"><Blogs /></Route>
      <Route path="/create"><Create /></Route>
      <Route path="/post/someid"><PostDetails /></Route>
      <Route exact path="/"><Home /></Route>
  </Switch>
  </Router>
    );
}
}

export default Header;