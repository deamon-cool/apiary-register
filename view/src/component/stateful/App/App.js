import classes from './App.module.css';

import Navbar from '../../stateless/Navbar/Navbar';
import Container from '../../stateless/Container/Container';
import ImageButton from '../../stateless/ImageButton/ImageButton';

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Container>
        <ImageButton />
        <ImageButton />
      </Container>
    </div>
  );
}

export default App;
