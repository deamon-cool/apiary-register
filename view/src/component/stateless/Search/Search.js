import classes from './Search.module.css';

export default function Search(props) {

  return (
    <div className={classes.Search}>
      {props.children}
    </div>
  );
}