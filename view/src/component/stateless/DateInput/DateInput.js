import classes from './DateInput.module.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';

registerLocale('pl', pl);

export default function DateInput(props) {
  const date = props.date;
  const customStyle = props.customStyle;

  const changeHandler = (date) => {
    props.onChangeHandler(date);
  };

  return (
    <DatePicker
      locale='pl'
      closeOnScroll={true}
      selected={date}
      onChange={changeHandler} />
  );
}
