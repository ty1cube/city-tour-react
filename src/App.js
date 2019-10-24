import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import NavBar from "./components/NavBar/navbar"
import TourList from './components/TourList';


function App() {
  return (
    <React.Fragment>
      {/* <h2>Our application</h2> */}
      <NavBar />
      <TourList/>
    </React.Fragment>
  );
}

export default App;
