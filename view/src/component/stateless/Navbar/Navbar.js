import classes from './Navbar.module.css';

import apiaryImage from '../../../assests/images/apiary.png';

export default function Navbar(props) {
  const imageClickHanlder = () => {
    props.onImageClick();
  }

  return (
    <nav className={classes.Navbar}>
      <img src={apiaryImage} alt='Pasieka' onClick={imageClickHanlder} />
      <h1>Rejestr pasiek</h1>
      <div></div>
    </nav>
  );
}