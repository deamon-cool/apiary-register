import classes from './ImageButton.module.css';

export default function ImageButton(props) {
  const title = props.title;
  const src = props.imageSrc;
  const style = props.customStyle;

  const clickHandler = () => {
    props.onClickHandler();
  };

  return (
    <div className={classes.ImageButton} style={style}
      onClick={clickHandler}>
      <h3>{title}</h3>
      <img src={src} alt='obraz' />
    </div>
  );
}