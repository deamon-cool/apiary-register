import classes from './Button.module.css';

export default function NeButtonwApiary() {
  const text = props.text;

  const clickHandler = (e) => {
    e.preventDefault();
    props.onClickHandler();
  };

  return (
    <button className={classes.Button}
      onClick={clickHandler}>
      {text}
    </button>
  );
}
