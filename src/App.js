// eslint-disable-next-line
import React from 'react';
import './App.css';
import Header from './components/Header.js';
// import Home from './components/Home.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     {/* <div style= {{marginTop:'15rem'}}></div> */}
     {/* <Home/> */}
     <Footer></Footer>
    </div>
  );
}

export default App;
