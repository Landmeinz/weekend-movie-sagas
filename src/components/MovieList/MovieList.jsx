import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import './MovieList.css'


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    // on page load fetch all the movies from our database;
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    // BUTTONS to go back to the movie list or to the add movie form; 
    function handleClick(input, movie) {

        switch (input) {
            case 'dispatch':
                console.log('CLICKED on the image');
                console.log('this is the current image from handleClick', movie);
                dispatch({
                    type: 'SET_SELECTED_MOVIE',
                    payload: movie
                });

                axios({
                    method: 'GET',
                    url: `/api/genre/${movie.id}`
                })
                    .then(response => {
                        console.log('GET /api/genre response', response);
                        dispatch({
                            type: 'SET_GENRES',
                            payload: response.data
                        })
                    })
                    .catch(error => {
                        console.log('GET /api/genre ERROR', error);
                    });

                history.push('/details');
                break;

            default:
                break;
        }; // switch

    }; // handleClick



    // --- SX PROPERTIES --- //

    const sxContainerBox = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }

    // box properties that holds our movie title and our image together; 
    const sxCard = {
        m: .5,
        cursor: 'pointer',

        '& > :not(style)': {
            m: .5,
            width: 225,
            height: 370,
        },
        
        '&:hover': {
            borderRadius: 2,
            background: 'hsla(360, 70%, 50%, .9)',
        }
    }; // sxCard

    // box properties that holds our movie title info;
    const sxHeader = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :not(style)': {
            height: 35,
            p: .5,
        },
    }; // sxHeader

    // box properties that holds our image;
    const sxImageBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }; // sxImageBox


    return (
        <main>
            <Box sx={sxContainerBox} >
                {movies.map(movie => {
                    return (
                        <Box sx={sxCard}>
                            <Paper
                                elevation={2}
                                key={movie.id}
                                onClick={() => handleClick('dispatch', movie)}>

                                <Box sx={sxHeader}>
                                    <h3>{movie.title}</h3>
                                </Box>

                                <Box sx={sxImageBox}>
                                    <img
                                        src={movie.poster}
                                        alt={movie.title}
                                        width="200"
                                        height="275"
                                    />
                                </Box>

                            </Paper>
                        </Box>
                    );
                })}
            </Box>
        </main >
    );
}

export default MovieList;