import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Grid, Col, Row, FormControl } from 'react-bootstrap';


class BdayPicker extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    //const value = "1919-01-01T00:00:00-08:00"

    this.state = {
      day: value ? moment(value).date() : "",
      month: value ? moment(value).month() : "",
      year: value ? moment(value).year() : "",
      // selectDay: value ? moment(value).date() : dayLabel,
      // selectMonth: value ? moment(value).month() + 1 : monthLabel,
      // selectYear: value ? moment(value).year() : yearLabel,
      monthOptions: [],
      dayOptions: [],
      yearOptions: []
    };
  }

  componentDidMount() {
    const dayOptions = this.createDayOptions();
    const monthOptions = moment.months();
    const yearOptions = this.createYearOptions();

    this.setState({
      dayOptions,
      monthOptions,
      yearOptions
    });
  }

  createDayOptions = () =>{
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;    
  }
  createYearOptions = () =>{
    const years = [];
    const min_year = this.props.minYear;
    const max_year = this.props.maxYear;
    for (let i = min_year; i <= max_year; i++) {
      years.push(i);
    }
    return years;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, function(){
      this.checkDate()
    });
  }

  getDate(date) {
    if (moment(date).isValid()) {
      return moment(date).format();
    } else {
      return undefined;
    }
  }
  // isSelectedAllDropdowns(selectDay, selectMonth, selectYear) {
  //   if (selectDay === "" || selectMonth === "" || selectYear === "") {
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }    

  checkDate() {
    const { day, month, year} = this.state;

    const dateObject = {
      year,
      month,
      day
    };
    //console.log(this.isSelectedAllDropdowns(day, month, year))

    if (day === "" || month === "" || year === "") {
      const dateObject = {
        year,
        month,
        day
      };
      //console.log(this.getDate(dateObject))
      this.props.input.onBlur(this.getDate(dateObject));
      this.props.input.onChange(this.getDate(dateObject));
    } else {
      this.props.input.onBlur(null);
      this.props.input.onChange(undefined);
    }
  }

  render() {
    const { monthOptions, dayOptions, yearOptions } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <FormControl
              componentClass="select"
              name="month"
              value={this.state.month}
              onChange={this.handleChange}
            >
              <option value="">month</option>
              {
                monthOptions.map((month, index) => <option key={month} value={index}>{month}</option>)
              }
              
            </FormControl>          
          </Col>
          <Col xs={4}>
            <FormControl
              componentClass="select"
              name="day"
              value={this.state.day}
              onChange={this.handleChange}
            >
              <option value="">day</option>
              {
                dayOptions.map(day => <option key={day} value={day}>{day}</option>)
              }
            </FormControl>          
          </Col>
          <Col xs={4}>
            <FormControl
              componentClass="select"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
            >
              <option value="">year</option>
              {yearOptions.map(year => <option key={year} value={year}>{year}</option>)}
            </FormControl>          
          </Col>                
        </Row>
      </Grid>
    );
  }
}


// BdayPicker.defaultProps = {
//   dayLabel: "day",
//   minYear: 1916,
//   maxYear: 2017,
//   //yearDirection: YEAR_DIRECTION.DESC,
//   monthLabel: "month",
//   padDay: false,
//   padMonth: false,
//   selectDay: "",
//   selectMonth: "",
//   selectYear: "",
//   yearLabel: "year",
//   useMonthNumbers: false
// };
//BdayPicker.YEAR_DIRECTION = YEAR_DIRECTION;

export default BdayPicker;


