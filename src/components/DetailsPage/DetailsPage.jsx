
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// --- COMPONENTS --- // 


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function DetailsPage() {

    // const dispatch = useDispatch();
    const history = useHistory();


    // INVENTORY grab movies and genres from the store;
    const selectedMovie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);


    // BUTTON to go back to the movie list or to the add movie form; 
    function handleClick(pageDirection) {

        switch (pageDirection) {
            case 'movieList':
                console.log('CLICKED on movie list button');
                history.push('/')
                break;

            case 'addMovie':
                console.log('CLICKED on movie list button');
                history.push('/addMovie')
                break;

            default:
                break;
        }

    }; // handleClick



    // --- SX PROPERTIES --- //

    const sxContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'none',
        justifyContent: 'center',
        alignItems: 'start',

        '& > :not(style)': {
            m: .5,
        },
    }; // sxContainer

    // box properties that holds our movie title and our image together; 
    const sxPoster = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        '& > :not(style)': {
            width: 225,
            height: 370,
        },
    }; // sxPoster

    // box properties that holds our movie title size ;
    const sxHeader = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :not(style)': {
            height: 35,
            p: .5,
        },
    }; // sxHeader

    // box properties that holds our movie description and details;
    const sxDescription = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :not(style)': {
            p: 2,
            width: 550,
            minHeight: 340,
            maxHeight: '100%',
        },
    }; // sxDescription



    return (

        <div>
            <h2>DetailsPage</h2>

            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>

            <button onClick={() => handleClick('addMovie')}>ADD MOVIE</button>

            <Box sx={sxContainer}>
                <Box sx={sxPoster}>
                    <Paper elevation={2}>

                        <Box sx={sxHeader}>
                            <h3>{selectedMovie.title}</h3>
                        </Box>

                        <img
                            src={selectedMovie.poster}
                            alt={selectedMovie.title}
                            width="200"
                            height="275"
                        />

                    </Paper>
                </Box>

                <Box sx={sxDescription}>

                    <Paper>
                        <h4>{selectedMovie.title}</h4>

                        <p>
                            {genres.map((genre) => (
                                <span key={genre.movie_id}>{genre.name}{genre.movie_id = genres.length-1 ? ',' : ''} </span>
                            ))}
                        </p>

                        <p>{selectedMovie.description}</p>
                    
                        
                    </Paper>

                </Box>
            </Box>
        </div>
    )
}; // DetailsPage

export default DetailsPage;