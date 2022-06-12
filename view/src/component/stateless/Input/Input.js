import classes from './Input.module.css';

export default function Input(props) {
  const value = props.value;

  const changeHandler = (e) => {
    props.onChangeHandler(e.target.value);
  };

  return (
    <input className={classes.InputDate}
      onChange={changeHandler}
      value={value} />
  );
}
