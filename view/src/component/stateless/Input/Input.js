import classes from './Input.module.css';

export default function Input(props) {
  const name = props.name;
  const value = props.value;
  const readOnly = props.readOnly;
  const customStyle = props.customStyle;

  const changeHandler = (e) => {
    props.onChangeHandler(e);
  };

  return (
    <input className={classes.Input}
      style={customStyle}
      name={name}
      onChange={changeHandler}
      value={value}
      disabled={readOnly} />
  );
}
