import classes from './ErrorDiv.module.css';

export default function ErrorDiv(props) {
  const text = props.text;
  const customStyle = props.customStyle;

  return (
    <div className={classes.ErrorDiv}
      style={customStyle}>
      {text}
    </div>
  );
}
