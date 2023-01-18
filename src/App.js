import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
function App() {


    
    return (
     <div className="main">
      <div className="heading">
        <h1>HOOKED</h1>
      </div>
      <div className="components">
        <Search/>
      </div>
    </div>
  );
};

export default App;