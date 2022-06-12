import classes from './Button.module.css';

export default function Buttonw(props) {
  const text = props.text;
  const customStyle = props.customStyle;

  const clickHandler = (e) => {
    e.preventDefault();
    props.onClickHandler();
  };

  return (
    <button className={classes.Button}
      style={customStyle}
      onClick={clickHandler}>
      {text}
    </button>
  );
}
