import classes from './List.module.css';

export default function List(props) {
  const customStyle = props.customStyle;

  return (
    <article className={classes.List} style={customStyle}>
      {props.children}
    </article>
  );
}