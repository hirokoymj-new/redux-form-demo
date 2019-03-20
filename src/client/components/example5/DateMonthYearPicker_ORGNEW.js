import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FormControl } from "hyrecar-web-components";
import { Flex, Box } from "grid-styled";

const YEAR_DIRECTION = {
  ASC: "ASC",
  DESC: "DESC"
};

class DateMonthYearPicker extends React.Component {
  constructor(props) {
    super(props);
    const { dayLabel, monthLabel, yearLabel, value } = props;

    this.state = {
      day: null,
      month: null,
      year: null,
      selectDay: value ? moment(value).date() : dayLabel,
      selectMonth: value ? moment(value).month() + 1 : monthLabel,
      selectYear: value ? moment(value).year() : yearLabel
    };
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return (
      this.state.selectDay !== nextState.selectDay ||
      this.state.selectMonth !== nextState.selectMonth ||
      this.state.selectYear !== nextState.selectYear
    );
  }

  componentWillMount() {
    let day = [],
      month = [],
      year = [];

    const pad = n => {
      return n < 10 ? "0" + n : n;
    };

    for (let i = 1; i <= 31; i++) {
      day.push(this.props.padDay ? pad(i) : i);
    }

    let monthIndex = 1;
    for (const monthName of moment.localeData().months()) {
      month.push({
        text: this.props.useMonthNumbers
          ? this.props.padMonth ? pad(monthIndex) : monthIndex
          : monthName,
        value: monthIndex
      });
      monthIndex++;
    }
    if (this.props.yearDirection === YEAR_DIRECTION.DESC) {
      const from = this.props.maxYear;
      const to = this.props.minYear;
      for (let i = from; i >= to; i--) {
        year.push(i);
      }
    } else {
      const from = this.props.minYear;
      const to = this.props.maxYear;
      for (let i = from; i <= to; i++) {
        year.push(i);
      }
    }

    this.setState({
      day: day,
      month: month,
      year: year
    });
  }

  changeDate(e, type) {
    this.setState({
      [type]: e.target.value
    });
    this.checkDate(e.target.value, type);
  }

  getDate(date) {
    if (moment(date).isValid()) {
      return moment(date).format();
    } else {
      return undefined;
    }
  }

  checkDate(value, type) {
    let { selectDay, selectMonth, selectYear } = this.state;

    if (type === "selectDay") {
      selectDay = value;
    } else if (type === "selectMonth") {
      selectMonth = value;
    } else if (type === "selectYear") {
      selectYear = value;
    }

    if (this.isSelectedAllDropdowns(selectDay, selectMonth, selectYear)) {
      const dateObject = {
        year: selectYear,
        month: selectMonth - 1,
        day: selectDay
      };
      this.props.onBlur(this.getDate(dateObject));
      this.props.onChange(this.getDate(dateObject));
    } else {
      this.props.onBlur(null);
      this.props.onChange(undefined);
    }
  }

  isSelectedAllDropdowns(selectDay, selectMonth, selectYear) {
    if (selectDay === "" || selectMonth === "" || selectYear === "") {
      return false;
    }
    return (
      selectDay !== this.props.dayLabel &&
      selectMonth !== this.props.monthLabel &&
      selectYear !== this.props.yearLabel
    );
  }

  render() {
    const dayElement = this.state.day.map((day, id) => {
      return (
        <option value={day} key={id}>
          {day}
        </option>
      );
    });
    const monthElement = this.state.month.map((month, id) => {
      return (
        <option value={month.value} key={id}>
          {month.text}
        </option>
      );
    });
    const yearElement = this.state.year.map((year, id) => {
      return (
        <option value={year} key={id}>
          {year}
        </option>
      );
    });

    return (
      <Flex name={this.props.name}>
        <Box width={1 / 3}>
          <FormControl
            componentClass="select"
            name="month"
            defaultValue=""
            className={this.props.className}
            value={this.state.selectMonth}
            onChange={e => this.changeDate(e, "selectMonth")}
          >
            <option value="">{this.props.monthLabel}</option>
            {monthElement}
          </FormControl>
        </Box>
        <Box width={1 / 3} px={2}>
          <FormControl
            componentClass="select"
            name="day"
            defaultValue=""
            className={this.props.className}
            value={this.state.selectDay}
            onChange={e => this.changeDate(e, "selectDay")}
          >
            <option value="">{this.props.dayLabel}</option>
            {dayElement}
          </FormControl>
        </Box>
        <Box width={1 / 3}>
          <FormControl
            componentClass="select"
            name="month"
            defaultValue=""
            className={this.props.className}
            value={this.state.selectYear}
            onChange={e => this.changeDate(e, "selectYear")}
          >
            <option value="">{this.props.yearLabel}</option>
            {yearElement}
          </FormControl>
        </Box>
      </Flex>
    );
  }
}

DateMonthYearPicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  dayLabel: PropTypes.string,
  value: PropTypes.string,
  maxYear: PropTypes.number,
  minYear: PropTypes.number,
  yearDirection: PropTypes.oneOf(
    Object.keys(YEAR_DIRECTION).map(key => YEAR_DIRECTION[key])
  ),
  mode: PropTypes.string,
  monthLabel: PropTypes.string,
  padDay: PropTypes.bool,
  padMonth: PropTypes.bool,
  selectDay: PropTypes.string,
  selectMonth: PropTypes.string,
  selectYear: PropTypes.string,
  useMonthNumbers: PropTypes.bool,
  yearLabel: PropTypes.string
};

DateMonthYearPicker.defaultProps = {
  dayLabel: "day",
  minYear: 1916,
  maxYear: 2017,
  yearDirection: YEAR_DIRECTION.DESC,
  monthLabel: "month",
  padDay: false,
  padMonth: false,
  selectDay: "",
  selectMonth: "",
  selectYear: "",
  yearLabel: "year",
  useMonthNumbers: false
};
DateMonthYearPicker.YEAR_DIRECTION = YEAR_DIRECTION;

export default DateMonthYearPicker;
