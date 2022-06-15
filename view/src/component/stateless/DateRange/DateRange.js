import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';

import "../DateInput/CustomDatePicker.css";
import classes from './DateRange.module.css';

registerLocale('pl', pl);

export default function DateRange(props) {
  const startDate = props.startDate;
  const endDate = props.endDate;
  const customStyle = props.customStyle;

  const changeStartDate = (date) => {
    props.onChangeStartDate(date);
  };

  const changeEndDate = (date) => {
    props.onChangeEndDate(date);
  };

  return (
    <div className={classes.DateRange} style={customStyle}>
      <DatePicker className={classes.DatePicker}
        locale='pl'
        dateFormat="yyyy-MM-dd"
        closeOnScroll={true}
        selectsStart
        selected={startDate}
        onChange={changeStartDate}
        startDate={startDate}
        endDate={endDate} />
      <b>-</b>
      <DatePicker className={classes.DatePicker}
        locale='pl'
        dateFormat="yyyy-MM-dd"
        closeOnScroll={true}
        selectsEnd
        selected={endDate}
        onChange={changeEndDate}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate} />
    </div>
  );
}