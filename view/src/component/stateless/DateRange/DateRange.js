import classes from './DateRange.module.css';

export default function DateRange(props) {

  return (
    <div className={classes.DateRange}>
      <Input
        onChangeHandler={dateHandler}
        value={customDate} />
      <b>-</b>
      <Input
        onChangeHandler={dateHandler}
        value={customDate} />
    </div>
  );
}