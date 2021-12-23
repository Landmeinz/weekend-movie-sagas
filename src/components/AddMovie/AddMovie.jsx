
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// --- MUI --- //
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';



function AddMovie() {

    // INVENTORY grab ALL the genres from the store;
    let allGenres = useSelector(store => store.allGenres);

    const dispatch = useDispatch();
    const history = useHistory();


    // get all genres for our drop down selection on page load; 
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    // BUTTON to go back to the movie list; 
    function handleClick(value) {
        switch (value) {
            case 'movieList':
                console.log('CLICKED on movie list button');
                history.push('/')
                break;

            default:
                break;
        }
    }; // handleClick


    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [description, setDescription] = useState('')
    const [genreInput, setGenreInput] = useState('0')


    // BUTTON to ADD MOVIE and post to the database; 
    function handleSubmit(event) {
        console.log('CLICKED on add movie');
        event.preventDefault();


        // make sure genre gets selected before sending off the post; 
        if (genreInput != '0') {

            // --- dispatch a call to SAGA from here --- //
            dispatch({
                type: 'ADD_MOVIE',
                payload: { title, poster, description }
            });


            // empty all back to default values after submit; 
            setTitle('')
            setPoster('')
            setDescription('');
            setGenreInput('0');

            // direct the user back to the main page to see the new list of movies
            history.push('/')

        } else { alert('remember to select a genre') }
    }; // handleSubmit



    // --- SX PROPERTIES --- //

    const sxFormBox = {
        display: 'flex',
        justifyContent: 'center',
        height: 56,
        m: 1,
        gap: 1,
    }

    const sxButton = {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.4,
        width: 150,

    }

    const sxTextField = {
        p: 'none',
        width: 250,
    }

    const sxSelectGenre = {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1.4,
        width: 150,

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box sx={sxFormBox}>

                    <TextField sx={sxTextField} id="outlined-basic" label="Title of Movie" variant="outlined" type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required />

                    <TextField sx={sxTextField} id="outlined-basic" label="Poster Image URL" variant="outlined" type="text"
                        value={poster}
                        onChange={(event) => setPoster(event.target.value)}
                        required />

                    <TextField sx={sxTextField} id="outlined-basic" label="Description" variant="outlined" type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required />

                    <Select sx={sxSelectGenre} name="genre"
                        value={genreInput}
                        onChange={(event) => setGenreInput(event.target.value)} >

                        <MenuItem hidden value="0">Select Genre</MenuItem>
                        {allGenres.map((genre) => (
                            <MenuItem
                                key={genre.id}
                            >{genre.name}</MenuItem>
                        ))}
                    </Select>

                    <Button variant="contained" sx={sxButton} type="submit">
                        <SaveOutlinedIcon fontSize='large' />ADD TO WATCH LIST</Button>
                </Box>

            </form>
        </div>
    )
}; // AddMovie

export default AddMovie;