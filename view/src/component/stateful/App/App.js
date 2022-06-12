import { Routes, Route, useNavigate } from 'react-router-dom';

import classes from './App.module.css';

import { LIST_OF_APIARIES_ROUTE, NEW_APIARY_ROUTE } from '../../../config/config';
import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import RoutesContainer from '../../stateless/RoutesContainer/RoutesContainer';
import NewApiary from '../NewApiary/NewApiary';

function App() {
  let navigate = useNavigate();

  return (
    <div className={classes.App}>
      <Navbar onImageClick={() => navigate('/')}/>
      <Container>
        <Routes>
          <Route path="/" element={<RoutesContainer />} />
          <Route path={NEW_APIARY_ROUTE} element={<NewApiary />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
