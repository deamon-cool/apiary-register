import classes from './Apiary.module.css';

import newApiaryImage from '../../../assests/images/new-apiary.png';

export default function Apiary(props) {
  const name = props.name;
  const date = props.date;
  const apiaryNumber = props.apiaryNumber;
  const customStyle = props.customStyle;

  return (
    <article className={classes.Apiary} style={customStyle}>
      <img src={newApiaryImage} alt='obraz' />
      <section>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>Nr: {apiaryNumber}</p>
      </section>
    </article>
  );
}