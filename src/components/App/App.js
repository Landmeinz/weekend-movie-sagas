import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router-dom';

// components //
import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';

// --- MUI --- //
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';


function App() {

  const history = useHistory();

  return (
    <div className="App">

      <Header />

      <Router>
        
        <NavBar />

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

    </div>
  );
}

export default App;