import classes from './RoutesContainer.module.css';

import ImageButton from '../ImageButton/ImageButton';
import newApiaryImage from '../../../../assests/images/new-apiary.png';
import apiaryListImage from '../../../../assests/images/apiary-list.png';

export default function RoutesContainer(props) {
  return (
    <div className={classes.RoutesContainer}>
      <ImageButton title='Nowa pasieka' imageSrc={newApiaryImage} customStyle={{ margin: '10px' }} />
      <ImageButton title='Lista pasiek' imageSrc={apiaryListImage} customStyle={{ margin: '10px' }} />
    </div>
  );
}