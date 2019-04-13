import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export class MyDatePickerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <h1>My Form </h1>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />        
      </div>
    );
  }
}


// {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
// {!selectedDay && <p>Choose a day</p>}
// <DayPickerInput onDayChange={this.handleDayChange} />
