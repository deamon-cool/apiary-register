import React, { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import classes from './App.module.css';

import { LIST_OF_APIARIES_ROUTE, NEW_APIARY_ROUTE } from '../../../config/config';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import RoutesContainer from '../../stateless/RoutesContainer/RoutesContainer';

const NewApiary = React.lazy(() => import('../NewApiary/NewApiary'));
const Apiaries = React.lazy(() => import('../Apiaries/Apiaries'));

function App() {
  let navigate = useNavigate();

  return (
    <div className={classes.App}>
      <Navbar onImageClick={() => navigate('/')} />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<RoutesContainer />} />
            <Route path={NEW_APIARY_ROUTE} element={<NewApiary />} />
            <Route path={LIST_OF_APIARIES_ROUTE} element={<Apiaries />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
