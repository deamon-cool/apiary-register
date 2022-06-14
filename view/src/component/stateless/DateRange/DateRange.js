import classes from './DateRange.module.css';

import Input from '../Input/Input';

export default function DateRange(props) {
  const fromDate = props.fromDate;
  const toDate = props.toDate;
  const customStyle = props.customStyle;

  const dateRangeHandler = (e) => {
    props.onDateRangeHandler(e.target.name, e.target.value);
  };

  return (
    <div className={classes.DateRange} style={customStyle}>
      <Input
        name='fromDate'
        onChangeHandler={dateRangeHandler}
        value={fromDate}
        customStyle={{width: '100px'}} />
      <b> - </b>
      <Input
        name='toDate'
        onChangeHandler={dateRangeHandler}
        value={toDate}
        customStyle={{width: '100px'}} />
    </div>
  );
}