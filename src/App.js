import React from 'react';
import './style.css';
import { SidebarLeft } from './components/SidebarLeft/SidebarLeft';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { SidebarRight } from './components/SidebarRight/SidebarRight';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <section className="main-body">
          <SidebarLeft />
          <MobileMenu />
          <SidebarRight />
        </section>
      </div>
    </div>
  );
}

export default App;
