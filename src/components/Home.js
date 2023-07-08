import React from "react";
import Container from "./Container/container"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar  from "./Sidebar/sidebar";
import About from "./pages/About.jsx";
import Profile from "./pages/profile.jsx";
import Setting from "./pages/setting.jsx";
import To from "./pages/To.jsx"

function Service ()  {
    return (
<div className="App">
    <switch>
        <Container/>
      {/* <Sidebar/>
      <About/> */}
      {/* <Routes path="/dashboard" element={<About />} /> */}
          {/* <Route path="/" element={<About />} />
          <Route path="/dashboard" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Setting />} />
          <Route path="/productList" element={<To />} /> */}
   
        </switch>
      </div>
    );
};

export default Service
 