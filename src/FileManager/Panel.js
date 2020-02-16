import React from 'react';
import PanelViewer from './PanelViewer';

import Home from '../Pages/Home.js';



const panels = {"Home":<Home/>};


//panel alllows us to change what page we are on by changing the html on the page, not navigating to a new page
//calls the plane Viewer with an a list of panels
function Panel() {
    return (
      <>
        <div className="header">
          <h1>Alexander Waters</h1>
        </div>
        <PanelViewer panels={panels}/>
      </>
    );
  }
  
  export default Panel;