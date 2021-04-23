import React from "react";
import "./app.css";
import Navbar from "./Components/navbar";

import Main from "./Components/main";

function App() {
  return (
    <div className="container-fluid">
      <div>
        <Navbar />
      </div>
      <div className=" container  row">
        <div className="col-12">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
