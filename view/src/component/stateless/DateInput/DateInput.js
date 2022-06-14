import classes from './DateInput.module.css';

import DatePicker from "react-datepicker";
import "./CustomDatePicker.css";
import { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';

registerLocale('pl', pl);

export default function DateInput(props) {
  const date = props.date;
  const shorterWidth = props.shorterWidth;

  const changeDateHandler = (date) => {
    props.onDateChangeHandler(date);
  };

  let customClasses = classes.DatePicker;
  if (shorterWidth) {
    customClasses = [classes.DatePicker, classes.Short];
  }

  return (
    <DatePicker
      className={customClasses}
      locale='pl'
      dateFormat="yyyy-MM-dd"
      closeOnScroll={true}
      selected={date}
      onChange={changeDateHandler} />
  );
}
