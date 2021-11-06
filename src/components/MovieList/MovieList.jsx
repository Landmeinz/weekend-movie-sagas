import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

// --- COMPONENTS --- // 


// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    function handleClick(movie) {
        console.log('CLICKED on the image');
        console.log('this is the current image from handleClick', movie);
        dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        })
        history.push('/details')
    }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row', 
                            flexWrap: 'wrap',
                            justifyContent: 'center',

                            '& > :not(style)': {
                                m: 1,
                                width: 225,
                                height: 370,
                            }, }}>

                            <Paper 
                                elevation={2}
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                style={{ cursor: 'pointer' }} >
                                
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '& > :not(style)': {
                                        height: 35,
                                        p: .5,
                                    }, }}>

                                    <h3>{movie.title}</h3>
                                </Box>
                                
                                <img 
                                    src={movie.poster} 
                                    alt={movie.title} 
                                    width="200"
                                    height="275" />
                            </Paper>

                        </Box>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;