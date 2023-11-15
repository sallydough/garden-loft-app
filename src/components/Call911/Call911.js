import React from 'react'
import './call911.css'
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Call911 = () => {
  return (
    <div className='button-container1'>
      <Button variant="contained" color="error" size="large" startIcon={<LocalHospitalIcon />}>
        Call 911
      </Button>
    </div>
  )
}

export default Call911