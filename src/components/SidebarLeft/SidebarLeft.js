import React from 'react';
import './SidebarLeft.css';

export const SidebarLeft = () => {
  return (
    <div className="sidebar left-sidebar d-none d-md-block">
      <div className="logo">
        <a href="index.html"><img src="../../img/logo.png" alt=""/></a>
      </div>
      <ul className="main-menu">
        <li><a href="index.html" className="active"><i className="fa fa-home"></i> Home</a></li>
        <li><a href="#!"><i className="fa fa-music"></i> My Music</a></li>
        <li><a href="#!"><i className="fa fa-bullseye"></i> Podcast</a></li>
        <li><a href="#!"><i className="fa fa-play-circle-o"></i> Video</a></li>
      </ul>
      <div className="upgrade">
        <h3>Upgrade to Pro</h3>
        <p>Ad-free, unlimited offline downloads and create playlist</p>
        <a href="#!" className="waves-effect waves-light">Get Pro</a>
      </div>
      <div className="download">
        <h3>Download the App</h3>
        <a href="#!"><img src="../../img/gp.png" alt=""/></a>
        <a href="#!"><img src="../../img/as.png" alt=""/></a>
      </div>
      <div style={{paddingBottom: "220px"}}></div>
    </div>
  )
};
