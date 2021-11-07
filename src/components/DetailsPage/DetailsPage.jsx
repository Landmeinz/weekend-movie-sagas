
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// --- COMPONENTS --- // 


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function DetailsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const selectedMovie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);

    console.log('--- the genres', genres);

    console.log('this is selectedMovie', selectedMovie);


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
        
        // axios.get('/')

    }

    return (

        <div>
            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>

            <button onClick={() => handleClick('addMovie')}>ADD MOVIE</button>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                m: 1,

                '& > :not(style)': {
                    m: .1,
                    width: 225,
                    height: 370,
                }, }}>

                <Paper elevation={2}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& > :not(style)': {
                            height: 35,
                            p: .5,
                        },
                    }}>

                        <h3>{selectedMovie.title}</h3>
                    </Box>

                    <img
                        src={selectedMovie.poster}
                        alt={selectedMovie.title}
                        width="200"
                        height="275" />
                </Paper>
            </Box>

            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& > :not(style)': {
                        p: 3,
                        width: 550,
                        height: 370,
                    },
                }}>

                    <Paper elevation={2}>

                        <h4>{selectedMovie.title}</h4>
                        <p>{selectedMovie.description}</p>
                        <p>{genres.name}</p>

                    </Paper>

                </Box>  

        </div>
    )
};

export default DetailsPage;