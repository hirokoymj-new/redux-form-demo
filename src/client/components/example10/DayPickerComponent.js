import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



export const DayPickerComponent = () => {
  const today = new Date();  
  return (
    <div>
      <DayPicker 
      //modifiers={ past }
      disabledDays={{ before: new Date() }}      
      />
    
    </div>
  )
}