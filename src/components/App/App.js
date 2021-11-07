import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// components //
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';

// --- MUI --- //
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {

  const sxType = {
    fontFamily: 'default',
  }

  const sxHeaderContainer = {
    display: 'flex',
    justifyContent: 'center',
    height: 165,

    border: 2,
  }

  return (
    <div className="App">

      <Typography sx={sxType} mt={2}>


        <Router>
          <Container sx={sxHeaderContainer}>
            <Header />
            <NavBar />
          </Container>

          <Route path="/" exact>
            <MovieList />
          </Route>

          {/* Details page */}
          <Route path="/details" >
            <DetailsPage />
          </Route>

          {/* Add Movie page */}
          <Route path="/addMovie" >
            <AddMovie />
          </Route>

        </Router>
      </Typography>

    </div>
  );
}

export default App;