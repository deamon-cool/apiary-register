import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import RoutesContainer from '../../stateless/RoutesContainer/RoutesContainer';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<RoutesContainer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
