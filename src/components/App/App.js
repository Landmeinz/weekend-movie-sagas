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
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: 'hsla(360, 70%, 50%, .9)',
      },
      secondary: {
        main: 'hsla(360, 50%, 50%, .9)',
      },
    },
  });

  const sxType = {
    fontFamily: 'default',
  }

  const sxHeaderContainer = {
    display: 'flex',
    justifyContent: 'center',
    height: 165,

    // border: 2,
  }

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Typography sx={sxType} mt={2}>
          <Router>
            
            <Container sx={sxHeaderContainer}>
              <Header />
              <NavBar />
            </Container>

            <Route path="/" exact>
              <MovieList />
            </Route>

            <Route path="/details" >
              <DetailsPage />
            </Route>

            <Route path="/addMovie" >
              <AddMovie />
            </Route>

          </Router>
        </Typography>
      </ThemeProvider>

    </div>
  );
}

export default App;