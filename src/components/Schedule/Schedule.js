import React from 'react'
import './schedule.css';
import {LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';

const Schedule = () => {
  return (
    <div className='schedule-container'> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar />
  </LocalizationProvider>
  </div>
  );
}

export default Schedule