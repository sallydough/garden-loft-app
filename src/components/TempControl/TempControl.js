import React from "react";
import "./tempControl.css";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const styles = {

  largeIcon: {
    width: 80,
    height: 60,
  },

};

const TempControl = () => {
  return (
    <div className="temp-container">
      <div className="temp-control">
        <h3>Temperature</h3>
        <h1>24&#186;C</h1>
        <ToggleOffOutlinedIcon />
      </div>
      <div className="img-settings-container">
      <div className="temp-image">
        <DeviceThermostatIcon  />
      </div>
      <div className="temp-settings">
        <button>-</button>
        <button>+</button>
      </div>
      </div>
    </div>
  );
};

export default TempControl;
