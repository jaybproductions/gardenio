import React, { useEffect, useState } from "react";
import { getCrop } from "../utils/api";
import Crop from "./Crop";
function CropTypeContainer({ crop, type, title }) {
  const [cropInfo, setCropInfo] = useState([]);

  useEffect(() => {
    getInfoFromApi();
  }, [crop]);

  const getInfoFromApi = async () => {
    const cropData = await getCrop(type, crop);
    console.log(Object.values(cropData));
    setCropInfo(Object.values(cropData));
  };

  return (
    <div className="crop-display">
      <h3>{title}</h3>
      <div className="crop-container">
        {cropInfo.map((crop, index) => (
          <Crop crop={crop} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CropTypeContainer;
