import classes from './DateRange.module.css';

import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';

export default function DateRange(props) {
  const fromDate = props.fromDate;
  const toDate = props.toDate;
  const customStyle = props.customStyle;

  const dateRangeHandler = (e) => {
    props.onDateRangeHandler(e.target.name, e.target.value);
  };

  return (
    <div className={classes.DateRange} style={customStyle}>
      <DateInput shorterWidth={true}/>
      {/* <Input
        name='fromDate'
        onChangeHandler={dateRangeHandler}
        value={fromDate}
        customStyle={{width: '120px'}} /> */}
      <b>-</b>
      <DateInput shorterWidth={true}/>
      {/* <Input
        name='toDate'
        onChangeHandler={dateRangeHandler}
        value={toDate}
        customStyle={{width: '120px'}} /> */}
    </div>
  );
}