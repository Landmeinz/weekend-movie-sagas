
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


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



    return (
        <div>
            <h2>AddMovie</h2>

            <button onClick={() => handleClick('movieList')}>MOVIE LIST</button>

            <form onSubmit={handleSubmit}>

                <button type="submit">SAVE MOVIE</button>

                <input type="text"
                    value={title}
                    placeholder="Title of Movie"
                    onChange={(event) => setTitle(event.target.value)}
                    required />

                <input type="text"
                    value={poster}
                    placeholder="Poster Image URL"
                    onChange={(event) => setPoster(event.target.value)}
                    required />

                <input type="text"
                    value={description}
                    placeholder="Description"
                    onChange={(event) => setDescription(event.target.value)}
                    required />

                <select name="genre"
                    value={genreInput}
                    onChange={(event) => setGenreInput(event.target.value)} >

                    <option hidden value="0">Select Genre</option>
                    {allGenres.map((genre) => (
                        <option
                            key={genre.id}
                        >{genre.name}</option>
                    ))}
                </select>

            </form>
        </div>
    )
}; // AddMovie

export default AddMovie;