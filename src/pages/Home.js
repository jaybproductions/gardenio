import React, { useState, useEffect } from "react";
import CropTypeContainer from "../components/CropTypeContainer";
import { getAllVegetables } from "../utils/api";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <CropTypeContainer crop="broccoli" type="vegetables" title="Broccoli" />
      <CropTypeContainer crop="tomatoes" type="fruits" title="Tomatoes" />
    </div>
  );
}

export default Home;
