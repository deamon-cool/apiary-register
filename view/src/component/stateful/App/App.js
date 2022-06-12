import { Routes, Route, useNavigate } from 'react-router-dom';

import classes from './App.module.css';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import RoutesContainer from '../../stateless/RoutesContainer/RoutesContainer';

function App() {
  let navigate = useNavigate();

  return (
    <div className={classes.App}>
      <Navbar onImageClick={() => navigate('/')}/>
      <Container>
        <Routes>
          <Route path="/" element={<RoutesContainer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
