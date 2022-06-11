import classes from './App.module.css';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import ImageButton from '../../stateless/ImageButton/ImageButton';
import newApiaryImage from '../../../assests/images/new-apiary.png';
import apiaryListImage from '../../../assests/images/apiary-list.png';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Container>
        <ImageButton title='Nowa pasieka' imageSrc={newApiaryImage}/>
        <ImageButton title='Lista pasiek' imageSrc={apiaryListImage}/>
      </Container>
    </div>
  );
}

export default App;
