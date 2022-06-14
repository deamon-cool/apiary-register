import classes from './DateInput.module.css';

import DatePicker from "react-datepicker";
import "./customDatePicker.css";
import { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';

registerLocale('pl', pl);

export default function DateInput(props) {
  const date = props.date;

  const changeDateHandler = (date) => {
    props.onDateChangeHandler(date);
  };

  return (
    <DatePicker
      className={classes.DatePicker}
      locale='pl'
      dateFormat="yyyy-MM-dd"
      closeOnScroll={true}
      selected={date}
      onChange={changeDateHandler} />
  );
}
