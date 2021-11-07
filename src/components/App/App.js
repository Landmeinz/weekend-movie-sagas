import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router-dom';

// components //
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage.jsx'
import AddMovie from '../AddMovie/AddMovie.jsx'

// --- MUI --- //
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';


function App() {

  const history = useHistory();

  return (
    <div className="App">

      <h1>The Movies Saga!</h1>

      <Router>

        {/* <nav>
          <Link to="/">HOME</Link>
          <Link> </Link>
          <Link to="/details">DETAILS</Link>
          <Link> </Link>
          <Link to="/addMovie">ADD</Link>
        </nav> */}

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