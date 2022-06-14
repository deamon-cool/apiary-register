import classes from './Apiary.module.css';

export default function Apiary(props) {
  const customStyle = props.customStyle;

  return (
    <article className={classes.Apiary} style={customStyle}>
      {props.children}
    </article>
  );
}