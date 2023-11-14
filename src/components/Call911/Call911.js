import React from 'react'
import './call911.css'
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Call911 = () => {
  return (
    <div>
      <Button variant="contained" startIcon={<LocalHospitalIcon />}>
        Call 911
      </Button>
    </div>
  )
}

export default Call911