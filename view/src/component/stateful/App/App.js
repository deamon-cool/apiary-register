import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Container>
        <Routes>

        </Routes>
      </Container>
      <RoutesContainer>
        <ImageButton title='Nowa pasieka' imageSrc={newApiaryImage} customStyle={{ margin: '10px' }} />
        <ImageButton title='Lista pasiek' imageSrc={apiaryListImage} customStyle={{ margin: '10px' }} />
      </RoutesContainer>
    </div>
  );
}

export default App;
