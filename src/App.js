import React from "react";
import "./resources/styles.css";
import VenueInfo from "./components/venueInfo";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Highlight from "./components/Highlights";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlight />
    </div>
  );
}

export default App;
