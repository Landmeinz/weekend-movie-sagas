
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// --- COMPONENTS --- // 


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function DetailsPage() {

    // const dispatch = useDispatch();
    const history = useHistory();


    // INVENTORY grab ALL movies and the SELECTED genres from the store;
    const selectedMovie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);



    // --- SX PROPERTIES --- //

    const sxContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',

        '& > :not(style)': {
            m: 1,
        },
    }; // sxContainer

    // box properties that holds our movie title and our image together; 
    const sxCard = {
        textAlign: 'center',
        m: .5,

        '& > :not(style)': {
            m: .5,
            width: 225,
            height: 370,
        },
    }; // sxCard

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

    // box properties that holds our image;
    const sxImageBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }; // sxImageBox

    // box container that holds the movie title and genres next to each other; 
    const sxTitleGenreContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderRadius: 1, 


    }; // sxTitleGenreContainer

    // box that holds the movie title above the description;
    const sxTitle = {

        fontSize: 20,
        fontWeight: 700,
        mr: 4,
    }; // sxTitle

    return (

        <div>
            <Box sx={sxContainer}>
                <Box sx={sxCard}>
                    <Paper elevation={2}>

                        <Box sx={sxHeader}>
                            <h3>{selectedMovie.title}</h3>
                        </Box>

                        <Box sx={sxImageBox}>
                            <img
                                src={selectedMovie.poster}
                                alt={selectedMovie.title}
                                width="200"
                                height="275" />
                        </Box>

                    </Paper>
                </Box>

                <Box sx={sxDescription}>

                    <Paper>
                        <Box sx={sxTitleGenreContainer}>

                            <Box sx={sxTitle}>{selectedMovie.title}</Box>

                            <p>
                                {genres.map((genre) => (
                                    <span key={genre.movie_id}>{genre.name}{genre.movie_id = genres.length - 1 ? ',' : ''} </span>
                                ))}
                            </p>
                        </Box>

                        <p>{selectedMovie.description}</p>

                    </Paper>

                </Box>
            </Box>
        </div >
    )
}; // DetailsPage

export default DetailsPage;