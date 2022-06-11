import classes from './Container.module.css';

export default function Container(props) {
  return (
    <main className={classes.Container}>
      {props.children}
    </main>
  );
}