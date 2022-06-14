import classes from './DateRange.module.css';

export default function DateRange(props) {
  const fromDate = props.fromDate;
  const toDate = props.toDate;

  const dateRangeHandler = (e) => {
    props.onDateRangeHandler(e.target.name, e.target.value);
  }

  return (
    <div className={classes.DateRange}>
      <Input
        name='fromDate'
        onChangeHandler={dateRangeHandler}
        value={fromDate} />
      <b>-</b>
      <Input
        name='toDate'
        onChangeHandler={dateRangeHandler}
        value={toDate} />
    </div>
  );
}