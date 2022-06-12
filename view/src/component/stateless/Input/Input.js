import classes from './Input.module.css';

export default function Input(props) {
  const value = props.value;
  const readOnly = props.readOnly;
  const customStyle = props.customStyle;

  const changeHandler = (e) => {
    props.onChangeHandler(e.target.value);
  };

  return (
    <input className={classes.Input}
      style={customStyle}
      onChange={changeHandler}
      value={value} 
      disabled={readOnly}/>
  );
}
