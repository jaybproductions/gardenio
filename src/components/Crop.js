import React from "react";

function Crop({ crop }) {
  return (
    <div className="crop-single">
      <h5>{crop.name}</h5>
      <p>Time to harvest: {crop.timeToHarvest} days</p>
      <p>Type: {crop.type}</p>
    </div>
  );
}

export default Crop;
