import classes from './ImageButton.module.css';

export default function ImageButton(props) {
  const title = props.title;
  const src = props.imageSrc;
  
  return (
    <div className={classes.ImageButton}>
      <h3>{title}</h3>
      <img src={src} alt='obraz'/>
    </div>
  );
}