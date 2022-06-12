import { useNavigate } from 'react-router-dom';

import classes from './RoutesContainer.module.css';

import { NEW_APIARY_ROUTE, LIST_OF_APIARIES_ROUTE } from '../../../config/config';
import ImageButton from '../ImageButton/ImageButton';
import newApiaryImage from '../../../assests/images/new-apiary.png';
import apiaryListImage from '../../../assests/images/apiary-list.png';

export default function RoutesContainer(props) {
  let navigate = useNavigate();

  return (
    <div className={classes.RoutesContainer}>
      <ImageButton
        onClickHandler={() => navigate(NEW_APIARY_ROUTE)}
        title='Nowa pasieka'
        imageSrc={newApiaryImage}
        customStyle={{ margin: '10px' }} />
      <ImageButton
        onClickHandler={() => navigate(LIST_OF_APIARIES_ROUTE)}
        title='Lista pasiek'
        imageSrc={apiaryListImage}
        customStyle={{ margin: '10px' }} />
    </div>
  );
}