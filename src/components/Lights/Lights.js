import React from "react";
import "./lights.css";
import Switch from "@mui/material/Switch";
import TungstenIcon from "@mui/icons-material/Tungsten";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Lights = () => {
  return (
    <div className="lights-container">
      <div className="light-icon-container">
        <h3>Lighting Controls</h3>
        <TungstenIcon />
      </div>

      <div className="room-light">
        <div className="house-label">
          <h3>Living Room</h3>
        </div>
        <div className="light-device-container">
          <div className="light-device">
            <p>Device 1</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Device 2</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Device 3</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="room-light">
        <div className="house-label">
          <h3>Dining Room</h3>
        </div>
        <div className="light-device-container">
          <div className="light-device">
            <p>Device 1</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Head Light 2</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="room-light">
        <div className="house-label">
          <h3>Bed Room</h3>
        </div>
        <div className="light-device-container">
          <div className="light-device">
            <p>Device 1</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Device 2</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Device 3</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="room-light">
        <div className="house-label">
          <h3>Bathroom</h3>
        </div>
        <div className="light-device-container">
          <div className="light-device">
            <p>Device 1</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          <div className="light-device">
            <p>Device 1</p>
            <div className="light-slider">
              <h3 className="on">On</h3>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
              <h3 className="off">Off</h3>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Lights;
