import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}; // rootSaga


// GET all movies from the DB
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}; // fetchAllMovies


// GET all genres with movie id from the DB;
function* fetchAllGenres(action) {
    console.log('THIS IS THE ACTION', action);

    try {
        const response = yield axios.get('/api/genre');
        console.log('-------get all:', genres.data);
        yield put({ type: 'ALL_GENRES', payload: response.data });

    } catch {
        console.log('fetchAllGenres GET all genre error');
    }
}; // fetchAllMovies


// POST new pet to server, then GET pet data
function* addMovie(action) {
    console.log('trying to addMovie here', action.paylod);
    
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES' });
    } catch (err) {
        console.log('addMovie error', err);
    }
}; // addMovie



// --- REDUCERS --- //

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}; // sagaMiddleware

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            // console.log('this is the SELECTED genres action.payload', action.payload);
            return action.payload;

        default:
            return state;
    }
}; // genres

const allGenres = (state = [], action) => {
    switch (action.type) {
        case 'ALL_GENRES':
            // console.log('this is the ALL genres action.payload', action.payload);
            return action.payload;

        default:
            return state;
    }
}; // allGenres

const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE':
            console.log('this is action.payload of selectedMovie', selectedMovie);
            return action.payload
        default:
            return state;
    }
}; // selectedMovie

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        allGenres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
); // storeInstance



// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
