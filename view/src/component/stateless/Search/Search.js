import classes from './Search.module.css';

export default function Search(props) {
  const customStyle = props.customStyle;

  return (
    <div className={classes.Search} style={customStyle}>
      {props.children}
    </div>
  );
}