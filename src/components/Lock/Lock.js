import React from "react";
import "./lock.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/material";
import Switch from '@mui/material/Switch';

// const CustomSwitch = styled(Switch)({
//   width: 80,
// });

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Lock = () => {
  return (
    <div className="lock-container">

      <div className="home-icon-container">
        <h3>Home Security</h3>
        <HomeOutlinedIcon />
      </div>

      <div className="lock-slider">
        <LockOpenIcon className="lock" />
        <Switch {...label} defaultChecked />
        <LockIcon className="lock" />
      </div>

    </div>
  );
};

export default Lock;
