import React, { useState, useEffect } from "react";
import CropTypeContainer from "../components/CropTypeContainer";
import { getAllVegetables } from "../utils/api";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="home">
      <Hero />
    </div>
  );
}

export default Home;
