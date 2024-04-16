import React from 'react';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import { Router } from './route';
import img from './assets/imges/iact-logo.png';
import { memo } from 'react';


import MainView from './Component/ViewLayout/MainView';
import { Outlet } from 'react-router-dom';

function App() {
  console.log("======app======");
  
  return (
    <>
      <div className='flex-direction-column bg-body-secondary'>
       
          {/* Pass Router and components to Header */}
          <Header logo={img} route={Router} />

      

        <div style={{ height: '100vh', backgroundColor: "#cfd6cf85" }}>
          <MainView></MainView>
        </div>
        <div>
          {/* Pass name to Footer */}
          <Footer name="Pro-name" />
        </div>
      </div>
    </>
  )
}

export default memo(App);
